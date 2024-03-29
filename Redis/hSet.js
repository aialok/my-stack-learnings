const client = require("./client");

async function init() {
  const hSet1 = await client.hset("person:1", {
    name: "Alok",
    gender: "Male",
    nationality: "India",
  });
  console.log(hSet1);

  const hSet2 = await client.hset("person:2", {
    name: "John",
    gender: "Male",
    nationality: "USA",
  });
  console.log(hSet2);

  const hSet3 = await client.hset("person:3", {
    name: "Jane",
    gender: "Female",
    nationality: "UK",
  });
  console.log(hSet3);
}

init();
