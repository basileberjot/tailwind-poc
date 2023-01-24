import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-gray-700">
      <nav className="p-4">
        <div className="bg-zeals-blue rounded flex justify-center">
          <h2 className="text-lg font-medium text-white">Navigation</h2>
        </div>
        <ul>
          <li className="my-2">
            <a href="#" className="text-white hover:text-blue-600">
              Home
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-white hover:text-blue-600">
              About
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="text-white hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
