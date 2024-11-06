import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className=" w-full h-[calc(100vh-60px)] mt-[60px] pt-[90px] bg-hero bg-no-repeat
     bg-cover"
      id="HomeSection"
    >
      <div className=" container">
        <h1 className=" text-5xl font-bold leading-tight text-white">
          Where Fitness
          <br className="hidden md:block" /> Becomes Your{" "}
          <br className="hidden md:block" /> Lifestyle
        </h1>
        <h3 className="mt-7 text-2xl text-accent-500">BECOME A MEMBER</h3>
        <p className="text-white mt-3 ">
          Aenon gym is the best fitness center in Lagos, we have <br />
          <br className="hidden md:block" />
          skillful and professional Instructors to guide you.
        </p>
        <div className="mt-7 flex items-center flex-col  md:flex-row gap-5">
          <button
            className=" px-10 py-2 rounded-full cursor-pointer text-white
           bg-primary-500 hover:bg-primary-400 font-bold"
          >
            Book Now
          </button>
          <Link href="#" className=" underline text-accent-400">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
