import  express from "express";
import { AddNewbook, getBooks } from "../controller/books.controller";

const router = express.Router();

router.get('/', getBooks)
router.post('/', AddNewbook)

export default router;