import  express from "express";
import { AddNewusers, getUser } from "../controller/user.controller";
import validate from "../middleware/validate";

const router = express.Router();

router.get('/', getUser)
router.post('/', AddNewusers)

export default router;