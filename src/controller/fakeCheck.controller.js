const { FactChecked, factCheckTransformer } = require('../model/factChecked.model');
const { User } = require('../model/user.model');

exports.insertData = async (req, res) => {
  const { body } = req;

  const user = await User.findById(body.journalist);
  if (user.roles !== 'journalist') throw new Error('The user is not a journalist');

  const factCheck = new FactChecked({
    url: body.url,
    text: body.text,
    prediction: body.prediction,
    sentiment: body.sentiment,
    journalist: body.journalist,
    result: body.result
  });

  try {
    const saved = await factCheck.save();
    res.json({
      error: null,
      data: saved
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

exports.getAll = async (req, res) => {
  // const arg = [];
  try {
    const all = await FactChecked.find();
    res.json({
      error: null,
      data: all
    });
  } catch (err) {
    res.status(404).json({ err });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const fact = await FactChecked.findById(id);
    res.json({
      error: null,
      data: fact
    });
  } catch (err) {
    res.status(404).json({ err });
  }
};
