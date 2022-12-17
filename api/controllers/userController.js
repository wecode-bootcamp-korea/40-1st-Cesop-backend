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

// const info = catchAsync(async (req, res) => {

//   const userId = req.user[0].id;

//   // const userId = req.body.id // 테스트용
//   const data = await userService.info(userId);
//   return res.status(200).json(data);
// });

module.exports = {
  signUp,
  signIn
  // info
};
