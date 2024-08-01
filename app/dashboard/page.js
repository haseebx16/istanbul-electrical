import React from 'react';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
          <div className="w-64 bg-white text-black">
              <div className='flex justify-center items-center'>
                    <img src="/logo-png.png" alt='logo' className='w-40 h-40'/>
                </div>
        <nav className="mt-6 ">
          <a href="#" className=" flex py-2.5 text-white px-4 rounded transition duration-200 bg-sky-800">
            <FaHome/>&nbsp;&nbsp;&nbsp;Home
          </a>
          <a href="#" className=" py-2.5 px-4 flex hover:text-white rounded transition duration-200 hover:bg-sky-800">
          <GoGraph />&nbsp;&nbsp;{" "} Analytics
          </a>
          <a href="#" className="flex py-2.5 px-4 hover:text-white rounded transition duration-200 hover:bg-sky-800">
          <FaUser/>&nbsp;&nbsp;{" "}Customers
          </a>
          <a href="#" className="flex py-2.5 px-4 hover:text-white rounded transition duration-200 hover:bg-sky-800">
          <IoMdSettings />&nbsp;&nbsp;{" "} Settings
          </a>
        </nav>
      </div>

      <div className="flex-1 bg-gray-100">
        <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-2xl font-semibold">Main Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <a href='/'><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Logout
            </button></a>
          </div>
        </header>
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-red-700 duration-300 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-2">Customer Complaints</h2>
              <p className="text-white text-xl">19222</p>
            </div>

            <div className="bg-green-500 duration-300 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl  font-semibold mb-2">Revenue</h2>
              <p className="text-white  text-xl">Lorem Ipsum Dolor Sit Amet</p>
            </div>

            <div className="bg-teal-600 duration-300 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-2">Electricity Produced</h2>
              <p className="text-white text-xl">Lorem Ipsum Dolor Sit Amet</p>
            </div>

            <div className="bg-blue-950 duration-300 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-2">Powerhouses</h2>
              <p className="text-white text-xl">200</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
