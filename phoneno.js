const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required(),
  dob: Joi.date().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(/^\d{10}$/).required(),
});

function validateForm(req, res, next) {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next