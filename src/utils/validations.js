import validator from "validator";
import { FULL_NAME_REGEX, URL_NAME_REGEX } from "./constants";
import { ERROR_MESSAGES } from "./constants";

const { NAMING_ERROR, URL_ERROR } = ERROR_MESSAGES;

export const checkInputValidation = (type, stringToCheck) => {
  switch (type) {
    case "name":
      return !validator.matches(stringToCheck, FULL_NAME_REGEX)
        ? NAMING_ERROR
        : null;
    case "url":
      return !validator.matches(stringToCheck, URL_NAME_REGEX)
        ? URL_ERROR
        : null;
  }
};
