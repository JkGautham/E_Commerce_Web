import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gary-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.qual_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">7 Day Policy</p>
        <p className="text-gary-400">We offer 7 day free return policy</p>
      </div>
      <div>
        <img src={assets.support_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">24/7 Helpline</p>
        <p className="text-gary-400">We have 24/7 support online</p>
      </div>
    </div>
  );
};

export default OurPolicy;
