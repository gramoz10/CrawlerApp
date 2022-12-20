import { body } from "express-validator";

const addSchema = [
  body("Url")
    .isString()
    .withMessage("Url should be string")
    .notEmpty()
    .withMessage("Url should not be empty")
];

export { addSchema };
