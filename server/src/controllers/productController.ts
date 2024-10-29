import { Request, Response } from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
    req: Request, 
    res: Response): Promise<void> => {

    try {

        const search = req.query.search?.toString();

        const products = await prisma.products.findMany({
            where: {
                name: {
                    contains: search,
                },
            },
            // take: 15,
            // orderBy: {
            //     stockQuantity: "desc",
            // },
        });



        res.status(200).json(
                products,
        );
            
    } catch (error) {

        res.status(500).json({message: "error retrieving dashboard data"});
    }


};

export const createProduct = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { productId, name, price, rating, stockQuantity } = req.body;

        const newProduct = await prisma.products.create({
            data: {
                productId,
                name,
                rating,
                price,
                stockQuantity,
            },
        });

        res.status(201).json({
            message: "Product created successfully",
            product: newProduct,
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Error creating product" });
    }
};
