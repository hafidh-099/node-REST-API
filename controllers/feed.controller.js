const database = require("../models/feed.model");
const { validationResult } = require("express-validator");
const { route } = require("../routes/feed.route");

exports.getFeeds = async (req, res, next) => {
  try {
    let result = await database.FeetchFeed();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

exports.postFeed = async (req, res, next) => {
  try {
    const valErr = validationResult(req);
    if (!valErr.isEmpty()) {
      return res
        .status(422)
        .json({ message: "validation fail", error: valErr.array() });
    }
    const { name, email, password } = req.body;
    await database.AddFeed(name, email, password);
    res.status(201).json({ message: "user success created" });
  } catch (error) {
    next(error);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await database.DelteFeed(id);
  } catch (error) {
    next(error);
  }
};
exports.EditUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const x = await database.EditUser(id);
    if (!x.length > 0) {
      throw new Error("fail to fetch user by id");
    }
    res.status(200).json({ editD: x });
  } catch (error) {
    next(error);
  }
};

exports.upload = (req, res, next) => {
  try {
    res.json({ message: "succes upload"});
  } catch (error) {
    next(error);
  }
};
