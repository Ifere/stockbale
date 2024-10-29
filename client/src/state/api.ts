import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface User {
    userId: string;
    name: string;
    email: string;
}

export interface Product {
    productId: string,
    name: string,
    description?: string,
    price: number,
    stockQuantity: number,
    rating?: number,
}

export interface NewProduct {
    name: string,
    description?: string,
    price: number,
    stockQuantity: number,
    rating?: number,
}

export interface SalesSummary {
    salesSummaryId: string,
    date: string,
    totalValue: number,
    changePercentage?: number
}

export interface PurchaseSummary {
    purchaseSummaryId: string,
    date: string,
    totalPurchased: number,
    changePercentage?: number
}

export interface ExpenseSummary {
    expenseSummaryId: string,
    date: string,
    totalExpenses: number,
}

export interface ExpenseByCategorySummary {
    expenseByCategorySummaryId: string,
    date: string,
    category: string,
    amount: string
}


export interface DashboardData {
    dashProducts: Product[],
    salesSummary: SalesSummary[],
    purchaseSummary: PurchaseSummary[],
    expenseSummary: ExpenseSummary[],
    expenseByCategorySummary: ExpenseByCategorySummary[]
}



export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    reducerPath: "api",
    tagTypes: ["DashboardData", "Products", "Users", "Expenses"],
    endpoints: (build) => ({
        // TODO: Implement getProducts query
        // getProducts: builder.query({ query: () => "/products" }),
        getDashboardData: build.query<DashboardData, void>({
            query: () => "/dashboard",
            providesTags: ["DashboardData"],
        }),
        getProducts: build.query<Product[], string | void>({
            query: (search) => ({
                url: "/products",
                params: search ? { search } : {}
            }),
            providesTags: ["Products"],
        }),
        createProduct: build.mutation<Product, NewProduct> ({
            query: (newProduct) => ({
                url: "/products",
                method: "POST",
                body: newProduct,

            }),
            invalidatesTags: ["Products"]
            // TODO: add to stuff you've learnt.
            // TODO: add the preference of one dashboard query in stead on passing down props to each component
    }),
    getUsers: build.query<User[], void>({
        query: () => "/users",
        providesTags: ["Users"],
      }),
      getExpensesByCategory: build.query<ExpenseByCategorySummary[], void>({
        query: () => "/expenses",
        providesTags: ["Expenses"],
      }),
    }),
});   

export const { 
    useGetDashboardDataQuery,
    useGetProductsQuery,
    useCreateProductMutation,
    useGetUsersQuery,
    useGetExpensesByCategoryQuery
 } = api;
