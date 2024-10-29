import { Request, Response } from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardData = async (
    req: Request, 
    res: Response) => {

    try {

        const dashProducts = await prisma.products.findMany({
            take: 15,
            orderBy: {
                stockQuantity: "desc",
            },
        });


        const salesSummary = await prisma.salesSummary.findMany({
            take: 15,
            orderBy: {
                date: "desc",
            },

            
        });


        const purchaseSummary = await prisma.purchaseSummary.findMany({
            take: 15,
            orderBy: {
                date: "desc",
            },
        });


        const expenseSummary = await prisma.expenseSummary.findMany({
            take: 15,
            orderBy: {
                date: "desc",
            },
        });


        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
            take: 15,
            orderBy: {
                date: "desc",
            },
        });


        const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
            (expense) => ({
                ...expense,
                amount: expense.amount.toString(),
            })
        );

        res.status(200).json(
            {
                dashProducts,
                salesSummary,
                purchaseSummary,
                expenseSummary,
                expenseByCategorySummary,
            }
        );
            
    } catch (error) {

        res.status(500).json({message: "error retrieving dashboard data"});
    }


};
