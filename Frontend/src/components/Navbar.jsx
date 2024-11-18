import React, { useEffect, useState } from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "../components/Login";
import Logout from "./Logout";
import { useAuth } from "./context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isNotesOpen, setIsNotesOpen] = useState(false); // State to control Notes dropdown

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Courses</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/why">Why Us</a>
      </li>
    </>
  );

  const toggleNotesDropdown = () => {
    setIsNotesOpen((prev) => !prev); // Toggle the dropdown visibility
  };

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="hidden sm:block md:text-xl font-bold cursor-pointer">
            ArrayLogic Academy
          </a>
        </div>

        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Notes Dropdown with Click to Open */}
          <div className="relative">
            <button
              onClick={toggleNotesDropdown} // Toggle visibility on click
              className="text-orange-500 pr-4 md:pr-5 font-bold text-2xl md:text-xl md:px-4 md:py-2 rounded-md duration-300"
            >
              Notes
            </button>
            {/* Conditionally render the dropdown based on isNotesOpen state */}
            {isNotesOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg w-48 rounded-lg">
                <li>
                  <a
                    href="/notes/java"
                    className="px-4 py-2 block hover:bg-gray-100"
                  >
                    Java
                  </a>
                </li>
                <li>
                  <a
                    href="/notes/python"
                    className="px-4 py-2 block hover:bg-gray-100"
                  >
                    Python
                  </a>
                </li>
                <li>
                  <a
                    href="/notes/mern"
                    className="px-4 py-2 block hover:bg-gray-100"
                  >
                    MERN
                  </a>
                </li>
                <li>
                  <a
                    href="/notes/cloud"
                    className="px-4 py-2 block hover:bg-gray-100"
                  >
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a
                    href="/notes/datascience"
                    className="px-4 py-2 block hover:bg-gray-100"
                  >
                    Data Science
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-600 hover:text-blue-800 duration-300 text-xl"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-blue-400 hover:text-blue-600 duration-300 text-xl"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-500 hover:text-blue-700 duration-300 text-xl"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-pink-500 hover:text-pink-700 duration-300 text-xl"
              />
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />
          </label>

          {authUser ? (
            <Logout />
          ) : (
            <div className="">
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
