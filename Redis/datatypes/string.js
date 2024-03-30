const client = require("./client");

async function init() {

  await client.set('msg:1', "Hey from node js!!!")

  const result = await client.get("msg:1");

  await client.expire('msg:1', 10);
  console.log("Result -> ", result);
}

init();
