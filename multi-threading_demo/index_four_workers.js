const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const { Worker } = require("worker_threads");
const THREAD_COUNT=1;


app.get("/non-blocking/", (req, res) => {
  res.status(200).send("This page is non-blocking");
});

// function calculateCount() {
//   return new Promise((resolve, reject) => {
//     let counter = 0;
//     for (let i = 0; i < 20_000_000_000; i++) {
//       counter++;
//     }
//     resolve(counter);
//   });
// }

function createWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./four_workers.js", { workerData:{
      thread_count : THREAD_COUNT
    } });
    worker.on("message", (result) => {
      resolve(result);
    });
    worker.on("error", reject);
  });
}

app.get("/blocking", async (req, res) => {

  const workerPromises = [];
  for (let i = 0; i < THREAD_COUNT; i++) {
    workerPromises.push(createWorker());
  }

  const result = await Promise.all(workerPromises);

  console.log(result);

  let total = 0;
  result.forEach((count) => {
    total += count;
  });

  res.status(200).send(`result is ${total}`);

});

// app.get("/blocking", async (req, res) => {
//   const worker = new Worker("./worker.js");
//     worker.on("message", (result) => {
//         res.status(200).send(`result is ${result}`);
//     });
//     worker.on("error", (msg) => {
//         res.status(500).send(msg);
//     });
//   const counter = await calculateCount();
//   res.status(200).send(`result is ${counter}`);
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});