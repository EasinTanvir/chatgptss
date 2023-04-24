const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const gptRoutes = require("./routes/user");
const { Configuration, OpenAIApi } = require("openai");

app.use(express.json());
app.use(cors());

const openApi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.Secret_Key,
  })
);

app.set("gpt", openApi);

app.use(gptRoutes);

app.listen(process.env.PORT);
