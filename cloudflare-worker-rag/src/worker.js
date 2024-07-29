import { createClient } from '@supabase/supabase-js';
import { Hono } from 'hono';
import { Ai } from '@cloudflare/ai';
import ui from './ui.html';
import write from './write.html';

const app = new Hono();
let supabase;

// Initialize Supabase client once
app.use('*', async (c, next) => {
  if (!supabase) {
    supabase = createClient(c.env.SUPABASE_URL, c.env.SUPABASE_KEY);
  }
  await next();
});

app.get('/', (c) => c.html(ui));

app.get('/query', async (c) => {
  const ai = new Ai(c.env.AI);
  const question = c.req.query('text') || 'What is the square root of 9?';

  try {
    const embeddings = await ai.run('@cf/baai/bge-base-en-v1.5', { text: question });
    const vector = embeddings.data[0];

    const { data: documents, error } = await supabase
      .rpc('match_documents', {
        query_embedding: vector,
        match_threshold: 0.6,
        match_count: 5,
      })
      .select('content');

    if (error) throw new Error('Failed to fetch documents');

    const injectedDocs = documents.map(({ content }) => content).join('\n\n') || 'No documents found';

    const systemPrompt = `You're an AI assistant who answers questions based on the provided context.
    Keep your replies succinct. Only use the context below to answer the question.
    If the question isn't related to the context or the information isn't available, say:
    "Sorry, I couldn't find any information on that."
    Do not go off topic.

    Context:
    ${injectedDocs}`;

    const { response: answer } = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question },
      ],
    });

    return c.text(answer);
  } catch (error) {
    console.error('Error:', error);
    return c.json({ error: error.message }, 500);
  }
});

app.get('/write', (c) => c.html(write));

app.post('/notes', async (c) => {
  try {
    const ai = new Ai(c.env.AI);
    const { text } = await c.req.json();

    if (!text) throw new Error('Text is required');

    const { data } = await ai.run('@cf/baai/bge-base-en-v1.5', { text: [text] });
    const values = data[0];

    if (!values) throw new Error('Failed to generate vector embedding');

    const { data: insertedData, error } = await supabase.from('documents').insert({
      content: text,
      embedding: values,
    });

    if (error) throw error;

    return c.json({ text, inserted: insertedData });
  } catch (error) {
    console.error('Error:', error);
    return c.json({ error: error.message }, 500);
  }
});

app.onError((err, c) => {
  console.error('Error:', err);
  return c.text('An error occurred: ' + err.message);
});

export default app;