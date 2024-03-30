const client = require("./client");

async function init() {
  const res1 = await client.lpush("msg", "Hey Alok");
  console.log(res1);

  const res2 = await client.lpush("msg", "Hey Priti");
  console.log(res2);

  const res3 = await client.lpush("msg", "How are you doing priti");
  console.log(res3);

  // For Reading messages
  const messages = await client.lrange("msg", 0, -1);
  console.log(messages);

  // Popping messages
  
  //   const pop = await client.rpop('msg');
  //   console.log(pop);

  // deleting key
  // del <key-name>
//   const result = await client.del('msg');
//   console.log(result)

}

init();
