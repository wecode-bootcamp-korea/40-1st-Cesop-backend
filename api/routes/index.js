const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter');
const itemRouter = require('./itemRouter');

router.use('/users', userRouter);
router.use('/items', itemRouter);

module.exports = router;
