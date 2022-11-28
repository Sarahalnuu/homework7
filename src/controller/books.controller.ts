import { Book } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { prisma } from "../config/db";

export const getBooks = async (req:Request,res:Response) => {
    const book = await prisma.Book.findMany();
    return res.status(200).json(Book);
}

export const AddNewbook = async (req:Request,res:Response) => {
    const newBook = req.body as Book;
    try {
        await prisma.Book.create({
            data: newBook,
        });
        res.status(201).json({
            message: 'New book added !'
        });
    } catch (error) {
const prismaError = error as PrismaClientKnownRequestError
res.status(400).json({
    message: prismaError.message,
})
    }
}