'use client';
import { RootState, useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarOpen } from '@/state';
import { Clipboard, Archive, Layout, LucideIcon, Menu, Users, SlidersHorizontal, CircleDollarSign } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
}: SidebarLinkProps) => {

    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === '/dashboard');

    // TODO: check this isActive logic in case you dont want the homepage to always be the dashboard page

    return (
        <Link href={href}>
        
         <div className={`flex items-center cursor-pointer
         ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"}
            hover:bg-gray-100 text-blue-500 gap-3 transition-colors duration-300
            ${isActive ? 'bg-gray-200' : ''}`}>

            <Icon className='w-6 h-6 text-blue-700' />
            <span className={`${isCollapsed ? 'hidden' : 'block'}
            font-medium text-blue-700
            `}>
            {!isCollapsed && label}

            </span>
        </div>
        </Link>
    )
}

const Sidebar = () => {

    const dispatch = useAppDispatch();
    const isSidebarOpen = useAppSelector(
        (state: RootState) => state.global?.isSidebarOpen
    );


    const toggleSidebar = () => {
        dispatch(setIsSidebarOpen(!isSidebarOpen));
    };



    const sidebarClassNames = `fixed flex flex-col 
    ${isSidebarOpen ? 'w-72 md:w-64' : 'w-0 md:w-16'}
    bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  return (
    <div className={sidebarClassNames}> 
        {/* Top Logo */}
        <div className={`flex gap-3 justify-between md: justify-normal items-center pt-8 ${
            isSidebarOpen ? 'px-8' : 'px-5'} `}>
                {/* TODO: move images from cloudinary to s3 */}
        <Image
          src="https://res.cloudinary.com/doy5slx3n/image/upload/v1730203269/Logo_design_cshdwn.png"
          alt="stockbale-logo"
          width={27}
          height={27}
          className="rounded w-8"
        />
        <h1 className={`text-2xl font-extrabold ${
            isSidebarOpen ? 'block' : 'hidden'
        }`}>STOCKBALE</h1>
        <button className="md:hidden bg-gray-100 rounded-full px-3 py-3 hover:bg-blue-100" 
        onClick={toggleSidebar}>
            <Menu className='w-4 h-4' /> 
        </button>
        </div>
        
        {/* Links */}
    <div className='flex-grow mt-8'>
        <SidebarLink 
        href="/dashboard" 
        icon={Layout} 
        label="Dashboard" 
        isCollapsed={!isSidebarOpen} />

<SidebarLink 
        href="/inventory" 
        icon={Archive} 
        label="Inventory" 
        isCollapsed={!isSidebarOpen} />

<SidebarLink 
        href="/products" 
        icon={Clipboard} 
        label="Products" 
        isCollapsed={!isSidebarOpen} />

<SidebarLink 
        href="/users" 
        icon={Users} 
        label="Users" 
        isCollapsed={!isSidebarOpen} />

<SidebarLink 
        href="/expenses" 
        icon={CircleDollarSign} 
        label="Expenses" 
        isCollapsed={!isSidebarOpen} />

<SidebarLink 
        href="/settings" 
        icon={SlidersHorizontal} 
        label="Settings" 
        isCollapsed={!isSidebarOpen} />


    </div>


    {/* Footer */}
    <div className={`${isSidebarOpen ? 'block' : 'hidden'} mb-10`}>
        <div className='text-center text-xs text-gray-500 flex flex-col gap-3'>
            <p>&copy; 2024 Stockbale.</p>
        </div>
    </div>
    </div>
  )
}

export default Sidebar