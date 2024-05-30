import { asyncHandler } from "../utils/asyncHandler.js";

 const registerUser = asyncHandler(  async (req, res) => {
    const userData = req.body;
    return res.status(200).json({
        message: "ok",
        user: userData
    });
} );

/*export const loginUser = (req, res) => {
    const loginData = req.body;
    // Add your login logic here
    res.status(200).json({
      message: 'User logged in successfully!',
      user: loginData
    });
  };*/



export {registerUser}