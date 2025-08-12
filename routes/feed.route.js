const express = require("express");
const router = express.Router();
const feedController = require("../controllers/feed.controller");
const {check,body} = require("express-validator");

let name = check("email").isEmail()
let password = body("password").isAlphanumeric().isLength({min:8}).trim().withMessage("password not validate")

router.get("/post",feedController.getFeeds);
router.post("/post",[name,password],feedController.postFeed);
router.delete("/user/delete/:id",feedController.deleteUser);
router.get("/user/edit/:id",feedController.EditUser);


module.exports=router;