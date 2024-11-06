import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import React from "react";
import Icons from "../icons/Icons";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-primary-200" id="AboutSection">
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-xl font-bold text-primary-500">
            ABOUT AENON FITNESS CENTER
          </h3>
          <p className=" text-justify text-primary-300">
            Aenon Fitness center is a gym founded on the pursuit of
            self-improvement. Our gym is architecturally designed to give you
            the best atmosphere for a satisfactory workout and a beautiful view
            of the Lagos Island. <br />
            We make fitness fun, effective and simple. Our coaches lead the
            fitness industry when it comes to helping people get into the best
            shape of their lives and reaching their fitness goals safely.
          </p>

          <div className="hidden md:block">
            <Icons />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-xl font-bold  text-primary-500">CONTACT US</h3>
          <div className="flex items-center gap-3  text-primary-300">
            <FaLocationArrow size={20} />
            <p>139, mukola, Lekki, Lagos State Nigeria.</p>
          </div>
          <div className="flex items-center gap-3  text-primary-300">
            <FaPhone size={20} />
            <p>+2349157015948</p>
          </div>
          <div className="flex items-center gap-3  text-primary-300">
            <MdEmail size={20} />
            <p>aenonfamily@gmail.com</p>
          </div>
          <div className=" md:hidden">
            <Icons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
