import Image from "next/image";
import Card from "../card/Card";
import React from "react";
import { HiAcademicCap, HiUsers } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import Link from "next/link";

const Benefits = () => {
  const cards = [
    {
      id: 1,
      icon: <HiAcademicCap size={25} />,
      title: "Expert and Qualified trainers",
      desc: `We have the Best, skilled and qualified trainers in Aenon gym.
       We have trainers with over 10 years of working, teaching and training experience.`,
    },
    {
      id: 2,
      icon: <IoCalendarClearOutline size={25} />,
      title: "Flexible Workout Time",
      desc: `Aenon gym has one of the best flexible workout time schedule.
       We provide fitness services for our members, base on their convenient time`,
    },
    {
      id: 3,
      icon: <HiUsers size={25} />,
      title: "Special Plans and Bonuses",
      desc: `We have special plans that allows families to access our fitness services at cheap and discount prices. 
      We also provide bonuses to our VIP members`,
    },
  ];
  return (
    <section className="w-full py-10 " id="BenefitSection">
      <div className=" container">
        <h2 className="uppercase text-2xl font-bold text-primary-500">
          {`It's`} more than just a gym
        </h2>
        <p className=" mt-3 text-primary-300">
          We have world best fitness equipments, instructors and we provide
          amazing and affordable fitness classes for everyone.
        </p>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-14">
          <div className="flex-1 relative min-h-[300px]">
            <Image
              fill
              src="/images/benefitsGraphic.png"
              alt="Benefit section image"
              className=" object-cover"
            />
          </div>
          <div className="flex-[2] ">
            <h2 className="text-2xl font-bold mb-4 text-primary-500">
              MILLIONS OF MEMBERS GETTING FIT DAILY
            </h2>
            <p className="w-[85%] text-primary-300">
              Millions of members around the world always go for workout to have
              good shapes and to improve health status. Regular physical
              activity is one of the most important things you can do for your
              health. Being physically active can improve your brain health,
              help manage weight, reduce the risk of disease, strengthen bones
              and muscles, and improve your ability to do everyday activities.
            </p>
            <Link href="#">
              <button
                className="font-bold px-10 mt-6 py-2 rounded-full
             text-white hover:bg-primary-400 bg-primary-300 cursor-pointer"
              >
                Join
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Benefits;
