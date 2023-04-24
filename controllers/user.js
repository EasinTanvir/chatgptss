const createGpt = (req, res) => {
  const openAi = req.app.get("gpt");

  openAi
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
    })
    .then((ress) => {
      //console.log(res.data.choices[0].message.content);
      res.status(200).json({ result: ress.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createGpt,
};
