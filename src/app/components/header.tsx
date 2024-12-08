import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";

export default function Header() {
  return (
    <div className="bg-white">
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Logo Section */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl text-blue-600 font-sans font-bold ml-5 md:ml-20">
              MORENT
            </span>
          </a>

          {/* Search Bar Section */}
          <div className="relative flex items-center w-full sm:w-72 md:w-96">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            {/* Search Input */}
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search something here"
            />
            {/* Filter Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <img
                src="/filter-icon.png"
                alt="Filter"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Heart Icon */}
            <span className="relative text-xl text-gray-600 hover:text-blue-500 cursor-pointer">
              <FaHeart />
            </span>

            {/* Notification Icon */}
            <span className="relative text-gray-600 hover:text-blue-500 cursor-pointer text-2xl">
              <IoIosNotifications />
              {/* Red Dot */}
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
            </span>

            {/* Setting Icon */}
            <span className="relative text-xl text-gray-600 hover:text-blue-500 cursor-pointer">
              <IoMdSettings />
            </span>

            {/* Profile Icon */}
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer">
              <img
                src="/profile-icon.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
