import  express from "express";
import { AddNewloan, getLoan } from "../controller/loan,controller";

import validate from "../middleware/validate";

const router = express.Router();

router.get('/', getLoan)
router.post('/', AddNewloan)

export default router;