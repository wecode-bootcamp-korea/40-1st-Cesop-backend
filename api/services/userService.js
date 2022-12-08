const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userDao } = require("../models");

const hashPassword = async plaintextPassword => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return await bcrypt.hash(plaintextPassword, salt);
};

const getUserById = async id => {
  return await userDao.getUserById(id);
};

const signUp = async (last_name, first_name, email, password) => {
  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!last_name || !first_name || !email || !password) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }

  if (!emailRegex.test(email)) {
    const error = new Error("INVALID_EMAIL");
    error.statusCode = 400;

    throw error;
  }

  if (!passwordRegex.test(password)) {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 400;

    throw error;
  }

  const hashedPassword = await hashPassword(password);

  return await userDao.createUser(last_name, first_name, email, hashedPassword);
};

const signIn = async (email, password) => {

  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(email)) {
    const error = new Error("INVALID_EMAIL");
    error.statusCode = 401;

    throw error;
  }

  if (!passwordRegex.test(password)) {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 401;

    throw error;
  }

  const user = await userDao.getUserByEmail(email);

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    const error = new Error("WRONG_PASSWORD");
    error.statusCode = 401;

    throw error;
  }

  const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    algorithm: process.env.ALGORITHM,
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  return accessToken;
};

module.exports = {
  signUp,
  signIn,
  getUserById
};
