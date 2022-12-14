const Joi = require("joi");
const bcrypt = require("bcrypt");
// const _ = require("lodash");
const express = require("express");
const { User } = require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("Auth 1")
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log("Auth 2")
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password.");
  console.log("Auth 3")
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");
  console.log("Auth 4")
  const token = user.generateAuthToken();
  res.send(token);
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(req);
}

module.exports = router;
