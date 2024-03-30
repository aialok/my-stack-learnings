const express = require("express");
const app = express();
const axios = require("axios");

const client = require("./datatypes/client");

app.get("/", async (req, res) => {
  const posts = await client.get("posts");

  if (posts) {
    return res.json(JSON.parse(posts));
  }

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  await client.set("posts", JSON.stringify(data));
  await client.expire("posts", 10);
  return res.json(data);
});

app.listen(3000);
