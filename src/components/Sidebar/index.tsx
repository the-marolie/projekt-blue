import React from 'react';

const Sidebar = () => {
  return (


    <div className="col-span-4 min-h-screen flex flex-row bg-gray-100">
      <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">Projekt Blue</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
              <span className="text-sm font-medium">Templates</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};


export { Sidebar };