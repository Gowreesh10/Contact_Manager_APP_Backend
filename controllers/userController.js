const asyncHandler = require('express-async-handler')

//@desc Register a User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
    res.json({message: 'register the user'})
});

//@desc login a User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
    res.json({message: 'login user'})
});

//@desc current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) => {
    res.json({message: 'current user'})
});
module.exports = {registerUser,loginUser,currentUser}