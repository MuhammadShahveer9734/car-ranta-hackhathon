import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full mt-10">
      {/* Pick-Up and Drop-Off Section */}
<div className="container px-5 mx-auto">
  <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
    {/* Pick-Up Section */}
    <div className="p-4 w-full lg:w-[600px] bg-white h-auto lg:h-40 rounded-xl">
      <div className="flex items-center">
        <img src="/mark.png" alt="m" className="w-5" />
        <h2 className="ml-3 text-lg font-bold">Pick - Up</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div>
          <label htmlFor="pick-location" className="block font-semibold">
            Locations
          </label>
          <select id="pick-location" className="block w-full mt-1 border rounded px-2 py-1">
            <option value="Select Your City">Select your city</option>
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
          </select>
        </div>
        <div>
          <label htmlFor="pick-date" className="block font-semibold">
            Date
          </label>
          <select id="pick-date" className="block w-full mt-1 border rounded px-2 py-1">
            <option value="Select Date">Select Date</option>
            <option value="17-07-2023">17-07-2023</option>
          </select>
        </div>
        <div>
          <label htmlFor="pick-time" className="block font-semibold">
            Time
          </label>
          <select id="pick-time" className="block w-full mt-1 border rounded px-2 py-1">
            <option value="Select Time">Select Time</option>
            <option value="12:00">12:00</option>
          </select>
        </div>
      </div>
    </div>

    {/* Switch Icon */}
    <div className="flex justify-center lg:block">
      <img src="/Switch.png" alt="Switch Icon" className="w-16 h-16 lg:w-25 lg:h-20" />
    </div>

    {/* Drop-Off Section */}
    <div className="p-4 w-full lg:w-[600px] bg-white h-auto lg:h-40 rounded-xl">
      <div className="flex items-center">
        <img src="/mark1.png" alt="m" className="w-5" />
        <h2 className="ml-3 text-lg font-bold">Drop - Off</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div>
          <label htmlFor="drop-location" className="block font-semibold">
            Locations
          </label>
          <select id="drop-location" className="block w-full mt-1 border rounded px-2 py-1">
            <option value="Select Your City">Select your city</option>
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
          </select>
        </div>
        <div>
          <label htmlFor="drop-date" className="block font-semibold">
            Date
          </label>
          <select id="drop-date" className="block w-full mt-1 border rounded px-2 py-1">
            <option value="Select Date">Select Date</option>
            <option value="17-07-2023">17-07-2023</option>
          </select>
        </div>
        <div>
          <label htmlFor="drop-time" className="block font-semibold">
            Time
          </label>
          <select id="drop-time" className="block w-full mt-1 border rounded px-2 py-1">
            <option value="Select Time">Select Time</option>
            <option value="12:00">12:00</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="flex flex-wrap items-center py-8">
  {/* Popular Car Section */}
  <div className="w-full sm:w-1/2 flex justify-center sm:justify-start mb-4 sm:mb-0">
    <h2 className="text-[#90A3BF] text-center sm:text-left">Popular Car</h2>
  </div>

  {/* View All Section */}
  <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
    <h2 className="text-[#3563E9] text-center sm:text-right">View All</h2>
  </div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className=" shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative width={304} h-96">
          <div className="text-[#ED3F3F] w-11 h-10 flex items-center justify-center  cursor-pointer absolute top-3 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              className="text-[#ED3F3F] inline-block"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              ></path>
            </svg>
          </div>

          <div className=" w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-2 left-7">
            <h2>Koenigsegg</h2>
          </div>
          <div className="text-[#90A3BF] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-7 left-2">
            <span className="block">sport</span>
          </div>

          <div className="w-5/6 h-[250px] p-2 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Image
              src="/car.png"
              alt="Product 1"
              className="h-full w-full object-contain"
              width={190}
              height={180}
            />
          </div>

          <div className="pt-4 bg-white ">
            <div className="flex">
              <div className="flex">
                <svg
                  className="absolute bottom-20 left-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48px"
                  height="48px"
                  viewBox="0 0 64 64"
                >
                  <rect
                    x="20"
                    y="18"
                    width="24"
                    height="28"
                    rx="3"
                    fill="#fee"
                  />
                  <rect x="28" y="26" width="8" height="12" fill="#90A3BF" />
                  <path
                    d="M44,20 v-4 h-4 v4 a2,2,0,0,1,2,2 h4 a2,2,0,0,1-2-2Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <h2 className="ml-12 text-[#90A3BF]">90L</h2>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="ml-7"
                  viewBox="0 0 64 64"
                >
                  {/* <!-- Outer Circle for Steering Wheel --> */}
                  <circle cx="32" cy="32" r="30" fill="#90A3BF" />

                  {/* <!-- Inner Circle (Grip of Steering Wheel) --> */}
                  <circle cx="32" cy="32" r="24" fill="#FFFFFF" />

                  {/* <!-- Center Hub --> */}
                  <circle cx="32" cy="32" r="8" fill="#90A3BF" />

                  {/* <!-- Steering Wheel Spokes --> */}
                  <path
                    d="M32 8 L32 24 M32 40 L32 56 M8 32 L24 32 M40 32 L56 32"
                    stroke="#90A3BF"
                    stroke-width="4"
                    stroke-linecap="round"
                  />

                  {/* <!-- Highlight to Add Depth --> */}
                  <circle
                    cx="32"
                    cy="32"
                    r="24"
                    fill="none"
                    stroke="#ED3F3F"
                    stroke-width="2"
                  />
                </svg>

                <h2 className="pl-1 text-[#90A3BF]">Manual</h2>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="ml-5"
                  viewBox="0 0 64 64"
                >
                  {/* <!-- Background --> */}
                  <circle cx="32" cy="32" r="30" fill="#FEE" />

                  {/* <!-- Person 1 (Left) --> */}
                  {/* <!-- Head --> */}
                  <circle cx="22" cy="24" r="6" fill="#90A3BF" />
                  {/* <!-- Body --> */}
                  <path
                    d="M16 36 Q22 32 28 36 L28 46 Q22 48 16 46 Z"
                    fill="#90A3BF"
                  />

                  {/* <!-- Person 2 (Right) --> */}
                  {/* <!-- Head --> */}
                  <circle cx="42" cy="24" r="6" fill="#90A3BF" />
                  {/* <!-- Body --> */}
                  <path
                    d="M36 36 Q42 32 48 36 L48 46 Q42 48 36 46 Z"
                    fill="#90A3BF"
                  />
                </svg>

                <h2 className="ml-1 text-[#90A3BF]">2 People</h2>
              </div>
            </div>
            <div className="flex">
              <h4 className="text-xl text-[#1A202C] font-bold mt-6 ml-6">
                $99.00/
                <span className="text-sm text-gray-400  mt-2 "> days</span>
              </h4>
              <p className="text-white bg-[#3563E9] text-xl mt-5 px-4 py-2 rounded-md ml-5">
                <button className="">Rent Now</button>
              </p>
            </div>
          </div>
        </div>
        <div className=" shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative width={304} h-96">
          <div className="text-[#ED3F3F] w-11 h-10 flex items-center justify-center  cursor-pointer absolute top-3 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              className="text-[#ED3F3F] inline-block"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              ></path>
            </svg>
          </div>

          <div className=" w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-2 left-7">
            <h2>Koenigsegg</h2>
          </div>
          <div className="text-[#90A3BF] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-7 left-2">
            <span className="block">sport</span>
          </div>

          <div className="w-5/6 h-[250px] p-2 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Image
              src="/car.png"
              alt="Product 1"
              className="h-full w-full object-contain"
              width={190}
              height={180}
            />
            {/* <img src="https://readymadeui.com/images/product9.webp" alt="Product 1"
      className="h-full w-full object-contain" /> */}
          </div>

          <div className="pt-4 bg-white ">
            <div className="flex">
              <div className="flex">
                <svg
                  className="absolute bottom-20 left-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48px"
                  height="48px"
                  viewBox="0 0 64 64"
                >
                  <rect
                    x="20"
                    y="18"
                    width="24"
                    height="28"
                    rx="3"
                    fill="#fee"
                  />
                  <rect x="28" y="26" width="8" height="12" fill="#90A3BF" />
                  <path
                    d="M44,20 v-4 h-4 v4 a2,2,0,0,1,2,2 h4 a2,2,0,0,1-2-2Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <h2 className="ml-12 text-[#90A3BF]">90L</h2>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="ml-7"
                  viewBox="0 0 64 64"
                >
                  {/* <!-- Outer Circle for Steering Wheel --> */}
                  <circle cx="32" cy="32" r="30" fill="#90A3BF" />

                  {/* <!-- Inner Circle (Grip of Steering Wheel) --> */}
                  <circle cx="32" cy="32" r="24" fill="#FFFFFF" />

                  {/* <!-- Center Hub --> */}
                  <circle cx="32" cy="32" r="8" fill="#90A3BF" />

                  {/* <!-- Steering Wheel Spokes --> */}
                  <path
                    d="M32 8 L32 24 M32 40 L32 56 M8 32 L24 32 M40 32 L56 32"
                    stroke="#90A3BF"
                    stroke-width="4"
                    stroke-linecap="round"
                  />

                  {/* <!-- Highlight to Add Depth --> */}
                  <circle
                    cx="32"
                    cy="32"
                    r="24"
                    fill="none"
                    stroke="#ED3F3F"
                    stroke-width="2"
                  />
                </svg>

                <h2 className="pl-1 text-[#90A3BF]">Manual</h2>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="ml-5"
                  viewBox="0 0 64 64"
                >
                  {/* <!-- Background --> */}
                  <circle cx="32" cy="32" r="30" fill="#FEE" />

                  {/* <!-- Person 1 (Left) --> */}
                  {/* <!-- Head --> */}
                  <circle cx="22" cy="24" r="6" fill="#90A3BF" />
                  {/* <!-- Body --> */}
                  <path
                    d="M16 36 Q22 32 28 36 L28 46 Q22 48 16 46 Z"
                    fill="#90A3BF"
                  />

                  {/* <!-- Person 2 (Right) --> */}
                  {/* <!-- Head --> */}
                  <circle cx="42" cy="24" r="6" fill="#90A3BF" />
                  {/* <!-- Body --> */}
                  <path
                    d="M36 36 Q42 32 48 36 L48 46 Q42 48 36 46 Z"
                    fill="#90A3BF"
                  />
                </svg>

                <h2 className="ml-1 text-[#90A3BF]">2 People</h2>
              </div>
            </div>
            <div className="flex">
              <h4 className="text-xl text-[#1A202C] font-bold mt-6 ml-6">
                $99.00/
                <span className="text-sm text-gray-400  mt-2 "> days</span>
              </h4>
              <p className="text-white bg-[#3563E9] text-xl mt-5 px-4 py-2 rounded-md ml-5">
                <button className="">Rent Now</button>
              </p>
            </div>
          </div>
        </div>
        <div className=" shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative width={304} h-96">
          <div className="text-[#ED3F3F] w-11 h-10 flex items-center justify-center  cursor-pointer absolute top-3 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              className="text-[#ED3F3F] inline-block"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              ></path>
            </svg>
          </div>

          <div className=" w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-2 left-7">
            <h2>Koenigsegg</h2>
          </div>
          <div className="text-[#90A3BF] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-7 left-2">
            <span className="block">sport</span>
          </div>

          <div className="w-5/6 h-[250px] p-2 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Image
              src="/car.png"
              alt="Product 1"
              className="h-full w-full object-contain"
              width={190}
              height={180}
            />
            {/* <img src="https://readymadeui.com/images/product9.webp" alt="Product 1"
      className="h-full w-full object-contain" /> */}
          </div>

          <div className="pt-4 bg-white ">
            <div className="flex">
              <div className="flex">
                <svg
                  className="absolute bottom-20 left-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48px"
                  height="48px"
                  viewBox="0 0 64 64"
                >
                  <rect
                    x="20"
                    y="18"
                    width="24"
                    height="28"
                    rx="3"
                    fill="#fee"
                  />
                  <rect x="28" y="26" width="8" height="12" fill="#90A3BF" />
                  <path
                    d="M44,20 v-4 h-4 v4 a2,2,0,0,1,2,2 h4 a2,2,0,0,1-2-2Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <h2 className="ml-12 text-[#90A3BF]">90L</h2>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="ml-7"
                  viewBox="0 0 64 64"
                >
                  {/* <!-- Outer Circle for Steering Wheel --> */}
                  <circle cx="32" cy="32" r="30" fill="#90A3BF" />

                  {/* <!-- Inner Circle (Grip of Steering Wheel) --> */}
                  <circle cx="32" cy="32" r="24" fill="#FFFFFF" />

                  {/* <!-- Center Hub --> */}
                  <circle cx="32" cy="32" r="8" fill="#90A3BF" />

                  {/* <!-- Steering Wheel Spokes --> */}
                  <path
                    d="M32 8 L32 24 M32 40 L32 56 M8 32 L24 32 M40 32 L56 32"
                    stroke="#90A3BF"
                    stroke-width="4"
                    stroke-linecap="round"
                  />

                  {/* <!-- Highlight to Add Depth --> */}
                  <circle
                    cx="32"
                    cy="32"
                    r="24"
                    fill="none"
                    stroke="#ED3F3F"
                    stroke-width="2"
                  />
                </svg>

                <h2 className="pl-1 text-[#90A3BF]">Manual</h2>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="ml-5"
                  viewBox="0 0 64 64"
                >
                  {/* <!-- Background --> */}
                  <circle cx="32" cy="32" r="30" fill="#FEE" />

                  {/* <!-- Person 1 (Left) --> */}
                  {/* <!-- Head --> */}
                  <circle cx="22" cy="24" r="6" fill="#90A3BF" />
                  {/* <!-- Body --> */}
                  <path
                    d="M16 36 Q22 32 28 36 L28 46 Q22 48 16 46 Z"
                    fill="#90A3BF"
                  />

                  {/* <!-- Person 2 (Right) --> */}
                  {/* <!-- Head --> */}
                  <circle cx="42" cy="24" r="6" fill="#90A3BF" />
                  {/* <!-- Body --> */}
                  <path
                    d="M36 36 Q42 32 48 36 L48 46 Q42 48 36 46 Z"
                    fill="#90A3BF"
                  />
                </svg>

                <h2 className="ml-1 text-[#90A3BF]">2 People</h2>
              </div>
            </div>
            <div className="flex">
              <h4 className="text-xl text-[#1A202C] font-bold mt-6 ml-6">
                $99.00/
                <span className="text-sm text-gray-400  mt-2 "> days</span>
              </h4>
              <p className="text-white bg-[#3563E9] text-xl mt-5 px-4 py-2 rounded-md ml-5">
                <button className="">Rent Now</button>
              </p>
            </div>
          </div>
        </div>
        <div className=" shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative width={304} h-96">
          <div className="text-[#ED3F3F] w-11 h-10 flex items-center justify-center  cursor-pointer absolute top-3 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              className="text-[#ED3F3F] inline-block"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              ></path>
            </svg>
          </div>

          <div className=" w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-2 left-7">
            <h2>Koenigsegg</h2>
          </div>
          <div className="text-[#90A3BF] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-7 left-2">
            <span className="block">sport</span>
          </div>

          <div className="w-5/6 h-[250px] p-2 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Image
              src="/car.png"
              alt="Product 1"
              className="h-full w-full object-contain"
              width={190}
              height={180}
            />
            {/* <img src="https://readymadeui.com/images/product9.webp" alt="Product 1"
      className="h-full w-full object-contain" /> */}
          </div>

          <div className="pt-4 bg-white ">
            <div className="flex">
              <div className="flex">
                <svg
                  className="absolute bottom-20 left-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48px"
                  height="48px"
                  viewBox="0 0 64 64"
                >
                  <rect
                    x="20"
                    y="18"
                    width="24"
                    height="28"
                    rx="3"
                    fill="#fee"
                  />
                  <rect x="28" y="26" width="8" height="12" fill="#90A3BF" />
                  <path
                    d="M44,20 v-4 h-4 v4 a2,2,0,0,1,2,2 h4 a2,2,0,0,1-2-2Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <h2 className="ml-12 text-[#90A3BF]">90L</h2>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="ml-7"
                  viewBox="0 0 64 64"
                >
                  {/* <!-- Outer Circle for Steering Wheel --> */}
                  <circle cx="32" cy="32" r="30" fill="#90A3BF" />

                  {/* <!-- Inner Circle (Grip of Steering Wheel) --> */}
                  <circle cx="32" cy="32" r="24" fill="#FFFFFF" />

                  {/* <!-- Center Hub --> */}
                  <circle cx="32" cy="32" r="8" fill="#90A3BF" />

                  {/* <!-- Steering Wheel Spokes --> */}
                  <path
                    d="M32 8 L32 24 M32 40 L32 56 M8 32 L24 32 M40 32 L56 32"
                    stroke="#90A3BF"
                    stroke-width="4"
                    stroke-linecap="round"
                  />

                  {/* <!-- Highlight to Add Depth --> */}
                  <circle
                    cx="32"
                    cy="32"
                    r="24"
                    fill="none"
                    stroke="#ED3F3F"
                    stroke-width="2"
                  />
                </svg>

                <h2 className="pl-1 text-[#90A3BF]">Manual</h2>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="ml-5"
                  viewBox="0 0 64 64"
                >
                  {/* <!-- Background --> */}
                  <circle cx="32" cy="32" r="30" fill="#FEE" />

                  {/* <!-- Person 1 (Left) --> */}
                  {/* <!-- Head --> */}
                  <circle cx="22" cy="24" r="6" fill="#90A3BF" />
                  {/* <!-- Body --> */}
                  <path
                    d="M16 36 Q22 32 28 36 L28 46 Q22 48 16 46 Z"
                    fill="#90A3BF"
                  />

                  {/* <!-- Person 2 (Right) --> */}
                  {/* <!-- Head --> */}
                  <circle cx="42" cy="24" r="6" fill="#90A3BF" />
                  {/* <!-- Body --> */}
                  <path
                    d="M36 36 Q42 32 48 36 L48 46 Q42 48 36 46 Z"
                    fill="#90A3BF"
                  />
                </svg>

                <h2 className="ml-1 text-[#90A3BF]">2 People</h2>
              </div>
            </div>
            <div className="flex">
              <h4 className="text-xl text-[#1A202C] font-bold mt-6 ml-6">
                $99.00/
                <span className="text-sm text-gray-400  mt-2 "> days</span>
              </h4>
              <p className="text-white bg-[#3563E9] text-xl mt-5 px-4 py-2 rounded-md ml-5">
                <button className="">Rent Now</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
