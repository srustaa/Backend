import { Router } from "express"; 
import { registerUser} from "../controllers/user.controllers.js";

const router = Router()

router.route("/register").post(registerUser);
//Router.route("/login").post(loginUser);


export default router