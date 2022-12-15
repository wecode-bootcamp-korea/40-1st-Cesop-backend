const { userService } = require("../services");
const { catchAsync } = require("../utils/error");

const signUp = catchAsync(async (req, res) => {
  const { lastName, firstName, email, password } = req.body;

  const insertId = await userService.signUp(
    lastName,
    firstName,
    email,
    password
  );

  try {
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }

  res
    .status(201, insertId)
    .json({ message: `welcome ${lastName + firstName}` });
});

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const accessToken = await userService.signIn(email, password);
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

const info = async (req, res) => {
  try {
    const userinfo = await userService.signIn();
    res.status(200).json({ userinfo });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = {
  signUp,
  signIn,
  info
};
