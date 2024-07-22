import { Link } from "@inertiajs/react";
import React from "react";
import { useSelector } from "react-redux";

export default function TopNavbarSection() {
    const path = window.location.pathname.split("/")[2];
    const { user } = useSelector((state) => state.app);

    function isActive(value) {
        if (path == value) {
            return "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0";
        } else {
            return "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0";
        }
    }
    return (
        <nav class="bg-white sticky top-0 start-0 border-b border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex gap-10">
                    <Link
                        href="https://flowbite.com/"
                        class="flex items-center space-x-3"
                    >
                        <div class="self-center text-3xl font-black whitespace-nowrap">
                           Hi {user.name}!
                        </div>
                    </Link>
                    <div
                        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link
                                    href="/administrator/dashboard"
                                    class={isActive("dashboard")}
                                    aria-current="page"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/administrator/inventory"
                                    class={isActive("inventory")}
                                >
                                    Inventory
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex md:order-2 space-x-3 md:space-x-0">
                    <Link
                        method="post"
                        as="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                        href={route("logout")}
                    >
                        LOGOUT
                    </Link>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
