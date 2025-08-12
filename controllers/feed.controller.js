const database = require("../models/feed.model");
const { validationResult } = require("express-validator");

exports.getFeeds = async (req, res, next) => {
  try {
    let result = await database.FeetchFeed();
    res.json({ data: result });
  } catch (error) {
    return next(error);
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
    return next(error);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await database.DelteFeed(id);
  } catch (error) {
    return next(error);
  }
};
exports.EditUser = async(req, res, next) => {
  try {
    const id = req.params.id;
    const x = await database.EditUser(id);
    res.status(200).json({editD:x})
  } catch (error) {
    return next(error);
  }
};
