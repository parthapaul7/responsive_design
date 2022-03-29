import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main className="w-[100vw]">
      <div className="w-full  bg-[#01CB63] md:flex">
        <div className="p-10 md:p-16 lg:p-[calc(3vw+5rem)] ">
          <h1 className="text-white text-[calc(1vw+1.75rem)] pb-10">
            AnyTime, anywhere Learn on your schedule from any device
          </h1>
          <p className=" text-[calc(0.7vw+0.9rem)]">
            We Believe everyone has the capcity to be creative
            <span className="text-white">Course Pro </span>is a place where
            people develop their own potential
          </p>
          <button className="w-[242px] h-[70px] bg-black rounded-[10px] my-10 text-white text-[1.5rem] mx-auto sm:mx-0">
            Let's Get Start
          </button>
        </div>
        <img
          className="md:w-1/2"
          src="images/Rectangle 25.png"
          alt=" big image"
        />
      </div>

      <div className="bg-img md:h-[345px] sm:flex justify-evenly items-center my-5">
        <div className="w-fit mx-auto my-10 text-center sm:text-left">
          <div className="text-[calc(1vw+1rem)] text-[#86919D]">Total Student</div>{" "}
          <div className="text-[#1F2532] text-[calc(1vw+1.75rem)]">5140</div>{" "}
          <div className="w- bg-green-600 h-2"></div>
        </div>
        <div className="w-fit mx-auto my-10 text-center sm:text-left">
          <div className="text-[calc(1vw+1rem)] text-[#86919D]">Partners</div>{" "}
          <div className="text-[#1F2532] text-[calc(1vw+1.75rem)]">4123</div>{" "}
          <div className="w bg-green-600 h-2"></div>
        </div>
        <div className="w-fit mx-auto my-10 text-center sm:text-left">
          <div className="text-[calc(1vw+1rem)] text-[#86919D]">
            Affiliate Distribution
          </div>
          <div className="text-[#1F2532] text-[calc(1vw+1.75rem)]">
            4.18 Lac
          </div>
          <div className="w bg-green-600 h-2"></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
