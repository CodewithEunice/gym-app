"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { title } from "process";
import { link } from "fs";

const itemStyles = "hover:text-accent-300 transition-all duration-300";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "Home",
      path: "#HomeSection",
    },
    {
      id: 2,
      title: "Benefits",
      path: "#BenefitSection",
    },
    {
      id: 3,
      title: "Our Classes",
      path: "#ClassSection",
    },
    {
      id: 4,
      title: "Contact Us",
      path: "#ContactSection",
    },
  ];

  return (
    <header
      className="w-full h-[10%] flex items-center fixed bg-gray-100
     md:text-primary-500 py-5  z-50 font-semibold  text-white"
    >
      <div className="container justify-between flex items-center">
        <div>
          <p className=" font-bold text-2xl text text-black">
            AENON<span className="font-bold text-primary-500">GYM</span>
          </p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer z-10"
        >
          {open ? (
            <IoIosClose size={30} />
          ) : (
            <RxHamburgerMenu size={30} color="black" />
          )}
        </div>

        <nav
          className={` ${
            open ? "right-0" : "right-[-100%]"
          } w-[70%] md:w-auto absolute top-0 
          h-screen md:static md:h-auto 
        md:bg-transparent flex items-center duration-500 ease-in
         bg-primary-300 px-5 md:px-0 pt-20 md:pt-0`}
        >
          <ul
            className="flex flex-col text-white font-extrabold 
            md:font-semibold md:text-primary-500 
          md:flex-row gap-6  "
          >
            {links.map((link) => (
              <li
                className="hover:text-accent-300"
                onClick={() => setOpen(false)}
                key={link.id}
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className=" hidden md:flex px-5 justify-center items-center gap-6">
            <Link
              href="#AboutSection"
              className={`${itemStyles}  
             `}
            >
              About us
            </Link>

            <button
              className="font-bold px-10 py-2 rounded-full
             text-white bg-primary-500 hover:bg-primary-400 cursor-pointer"
            >
              Join us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
