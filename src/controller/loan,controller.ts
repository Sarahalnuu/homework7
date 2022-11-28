import { loan } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { prisma } from "../config/db";

export const getLoan = async (req:Request,res:Response) => {
    const loan = await prisma.loan.findMany();
    return res.status(200).json(loan);
}

export const AddNewloan = async (req:Request,res:Response) => {
    const newLoan = req.body as loan;
    try {
        await prisma.loan.create({
            data: newLoan,
        });
        res.status(201).json({
            message: 'New loan added !'
        });
    } catch (error) {
const prismaError = error as PrismaClientKnownRequestError
res.status(400).json({
    message: prismaError.message,
})
    }
}