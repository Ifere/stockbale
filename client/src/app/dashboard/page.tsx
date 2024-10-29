"use client";

import CardDashProducts from "./CardDashProducts";
import CardSalesSummary from "./CardSalesSummary";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardExpenseSummary from "./CardExpenseSummary";
import StatCard from "./StatCard";
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";



const Dashboard = () => {
  return (
    <div 
    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">

      {/* Dashboard */}

      <CardDashProducts />
      
      <CardSalesSummary />

      <CardPurchaseSummary />

      <CardExpenseSummary />


{/* 
      <div className="row-span-3 xl:row-span-6 bg-gray-500">

      </div> */}


      {/* <div className="row-span-3 xl:row-span-6 bg-gray-500">

      </div>

      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500">

      </div>

      <div className="row-span-3 bg-gray-500">

      </div>
      
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500">
        
      
      </div>       */}

      <StatCard
      title="Customer & Expenses"
      primaryIcon={
      <Package className="text-blue-600 w-6 h-6"/>}
      dateRange="22 - 29 October 2024"
      details={[
        {
          title: "Customer Growth",
          amount: "175.00",
          changePercentage: 131,
          IconComponent: TrendingUp,
        },
        {
          title: "Expenses ",
          amount: "10.00",
          changePercentage: -56,
          IconComponent: TrendingDown,
        }
      ]}
      />
      
      {/* <div className="md:row-span-1 xl:row-span-2 bg-gray-500">


      </div> */}
            <StatCard
      title="Dues & Pending Orders"
      primaryIcon={
      <CheckCircle className="text-blue-600 w-6 h-6"/>}
      dateRange="22 - 29 October 2024"
      details={[
        {
          title: "Dues",
          amount: "250.00",
          changePercentage: 131,
          IconComponent: TrendingUp,
        },
        {
          title: "Pending Orders",
          amount: "1147.00",
          changePercentage: -56,
          IconComponent: TrendingDown,
        }
      ]}
      />
      
      {/* <div className="md:row-span-1 xl:row-span-2 bg-gray-500">


      </div> */}
            <StatCard
      title="Sales & Discounts"
      primaryIcon={
      <Tag className="text-blue-600 w-6 h-6"/>}
      dateRange="22 - 29 October 2024"
      details={[
        {
          title: "Sales",
          amount: "1000.00",
          changePercentage: 20,
          IconComponent: TrendingUp,
        },
        {
          title: "Discounts ",
          amount: "200.00",
          changePercentage: -10,
          IconComponent: TrendingDown,
        }
      ]}
      />


    </div>
  )
}

export default Dashboard;
