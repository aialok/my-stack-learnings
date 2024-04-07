const client = require("./datatypes/client");

const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/otp", async (req, res) => {
  console.log(req.body);
  const phone = req.body.phone;

  const otp = Math.floor(100000 + Math.random() * 900000);
  await client.set(`otp:${phone}`, otp);
  await client.expire(phone, 60);


  return res.json({ message: "OTP sent!" });
});

app.post("/verify", async (req, res) => {
  const { phone, otp } = req.body;
  console.log(req.body);

  const otpFromCache = await client.get(`otp:${phone}`);
  console.log(otpFromCache);

  if (parseInt(otp) === parseInt(otpFromCache)) {
    await client.del(`otp:${phone}`);
    console.log("OTP matched!");
    return res.json({ message: "OTP matched!" });
  } else {
    console.log("OTP not matched!");
    return res.json({ message: "OTP not matched!" });
  }
});

// const otpWorker = async (phone) => {
//   console.log(phone);
//   const otp = await client.get(`otp:${phone}`);
//   console.log(otp);
//   if (!otp) {
//     return;
//   }

//   //   const { phone, otp: otpValue } = JSON.parse(otp);
//   //   const otpFromCache = await client.get(phone);

//   if (otp === parseInt(otpFromCache)) {
//     await client.del(phone);
//     await client.del("otp");
//     console.log("OTP matched!");
//   } else {
//     console.log("OTP not matched!");
//   }
// };

app.listen(3000);


