import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()

  return (
    <nav className="bg-blue-600">
      <div className="mx-auto px-4 py-3 flex items-center justify-between max-w-7xl">
        <div className="text-white font-bold text-xl">EVENT Schedular</div>

        <div className="hidden md:flex space-x-6">
            <p onClick={()=>navigate("/")} className="text-white py-1 px-2 bg-yellow-500 rounded-lg">Events</p>
            <p onClick={()=>navigate("/addEvent")} className="text-white py-1 px-2 bg-yellow-500 rounded-lg">Add Event</p>
            <p onClick={()=>navigate("/profile")} className="text-white py-1 px-2 bg-yellow-500 rounded-lg">Profile</p>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-600">
          <p onClick={()=>navigate("/")} className="text-white py-1 px-2 bg-yellow-500 rounded-lg">Events</p>
            <p onClick={()=>navigate("/addEvent")} className="text-white py-1 px-2 bg-yellow-500 rounded-lg">Add Event</p>
            <p onClick={()=>navigate("/profile")} className="text-white py-1 px-2 bg-yellow-500 rounded-lg">Profile</p>
        </div>
      )}
    </nav>
  );
}
