import React from 'react'
import {Link} from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode.jsx";
import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";

const Header = () => {

    return (
        <Disclosure
            as="nav"
            className="py-5 sticky top-0 right-0 left-0 w-full flex-none overflow-hidden bg-white supports-backdrop-blur:bg-white/95 backdrop-blur transition-colors duration-500 z-[1000] dark:bg-black"
            style={{
                boxShadow: "0 .5rem 1rem rgba(0, 0, 0, .1)",
                borderBottom: ".2rem solid black",
                transition: "0.5s"
        }}
        >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />) : (<Bars3Icon className="block h-6 w-6" aria-hidden="true" />)}
                                </Disclosure.Button>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to="/" className="text-5xl font-bold dark:text-gray-300">Blog.</Link>
                                </div>

                                <div className="hidden md:space-x-4 md:ml-6 md:flex md:items-center">
                                    <Link to="/" className="rounded-md px-3 py-2 text-2xl font-medium hover:bg-gray-700 hover:text-white dark:text-gray-300">Home</Link>
                                    <Link to="/login" className="rounded-md px-3 py-2 text-2xl font-medium hover:bg-gray-700 hover:text-white dark:text-gray-300">Login</Link>
                                    <Link to="/register" className="rounded-md px-3 py-2 text-2xl font-medium hover:bg-gray-700 hover:text-white dark:text-gray-300">Register</Link>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <ToggleDarkMode/>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link to="/" className="block rounded-md px-3 py-2 text-2xl font-medium text-gray-600 hover:bg-gray-700 hover:text-white dark:text-gray-300">Home</Link>
                            <Link to="/login" className="block rounded-md px-3 py-2 text-2xl font-medium text-gray-600 hover:bg-gray-700 hover:text-white dark:text-gray-300">Login</Link>
                            <Link to="/register" className="block rounded-md px-3 py-2 text-2xl font-medium text-gray-600 hover:bg-gray-700 hover:text-white dark:text-gray-300">Register</Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Header