import React from 'react'
import {Link, useLocation} from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode.jsx";
import { Disclosure } from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';

const Header = () => {
    const location = useLocation();

    const categories = [
        {id: 1, name: 'Home', href: '/'},
        {id: 2, name: 'Profile', href: '/profile'}
    ];

    return (
        <Disclosure as="nav" className="sticky top-0 z-40 w-full flex-none bg-gray-300 supports-backdrop-blur:bg-white/95 backdrop-blur transition-colors duration-500 dark:border-gray-50/[0.06] dark:bg-black lg:z-50 lg:border-b lg:border-gray-900/10" style={{transition: "0.3s"}}>
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (<Bars3Icon className="block h-6 w-6" aria-hidden="true"/>)}
                                </Disclosure.Button>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to="/" className="text-2xl font-bold dark:text-white">Blog</Link>
                                </div>

                                <div className="hidden md:space-x-4 md:ml-6 md:flex md:items-center">
                                    <Link to="/" className={`${location.pathname === '/' ? "rounded-md px-3 py-2 font-medium bg-gray-600 text-white dark:text-white" : "rounded-md px-3 py-2 font-medium hover:bg-gray-600 hover:text-white dark:text-white"}`}>
                                        Home
                                    </Link>

                                    <Link to="/profile" className={`${location.pathname === '/profile' ? "rounded-md px-3 py-2 font-medium bg-gray-600 text-white dark:text-white" : "rounded-md px-3 py-2 font-medium hover:bg-gray-600 hover:text-white dark:text-white"}`}>
                                        Profile
                                    </Link>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <ToggleDarkMode/>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {categories.map(category => (
                                <Link key={category.id} to={category.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white dark:text-gray-300">
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Header