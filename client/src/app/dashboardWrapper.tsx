"use client";
import React, { useEffect } from 'react'
import Navbar from "@/app/(components)/Navbar";
import Sidebar from '@/app/(components)/Sidebar';
import StoreProvider, { RootState, useAppSelector } from './redux';

const DashboardLayout = ({ children}: {children: React.ReactNode }) => {
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.global?.isSidebarOpen);

    const isDarkMode = useAppSelector(
      (state: RootState) => state.global?.isDarkMode);

      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
        }
      }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>

        <Sidebar />

        <main className={`flex flex-col w-full hfull py-7 px-9 bg-gray-50 ${isSidebarOpen ? "md:pl-72" : "md:pl-24"}`}>

        <Navbar />
        {children}
        </main>
        
        
        </div>
  )
}

const DashboardWrapper = ({ children}: {children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>
      {children}
      </DashboardLayout>

    </StoreProvider>
        
        
  )
}

export default DashboardWrapper