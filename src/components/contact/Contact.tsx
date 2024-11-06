import React from "react";
import Image from "next/image";
import Button from "../button/Button";

const Contact = () => {
  return (
    <section className="w-full py-10" id="ContactSection">
      <div className="container  px-5 ">
        <h2 className="text-2xl font-bold uppercase text-primary-500">
          Join now to get in shape
        </h2>
        <p className="w-[60%] mt-3 text-primary-300">
          Take the first step by contacting our {`customer's service`}. Our{" "}
          {`customer's`} service is available 24/7 and we {`can't`}
          wait to welcome you in our fitness center.
        </p>
        <div className="flex gap-10 mt-5 flex-col md:flex-row">
          <div className="flex-1">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Name"
                className="px-3 w-full py-2 border-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-5 py-2 border-2"
              />
              <textarea
                placeholder="Message...."
                className="h-[100px]  px-5 resize-none py-2 border-2"
              ></textarea>
              <Button />
            </form>
          </div>
          <div
            className="  
             rounded-[20px] mt-5 flex
             flex-1 bg-primary-200"
          >
            <div className="w-full h-[250px] md:h-[400px] relative">
              <Image
                fill
                src="/images/contactGraphic.png"
                alt="contact image"
                className=" object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
