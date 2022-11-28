import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { prisma } from "../config/db";

export const getUser = async (req:Request,res:Response) => {
    const user = await prisma.user.findMany();
    return res.status(200).json(user);
}

export const AddNewusers = async (req:Request,res:Response) => {
    const newUser = req.body as User;
    try {
        await prisma.user.create({
            data: newUser,
        });
        res.status(201).json({
            message: 'New user added !'
        });
    } catch (error) {
const prismaError = error as PrismaClientKnownRequestError
res.status(400).json({
    message: prismaError.message,
})
    }
}