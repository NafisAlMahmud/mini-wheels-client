import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  // aasssd
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-20 text-center justify-center ">
      <h2 className="text-5xl font-bold my-8">Why Us?</h2>
      <p className="pb-8">
        we provide best authentic product and great service with fast delivary{" "}
      </p>
      <div className="grid grid-cols-3 " data-aos="zoom-out-right">
        <div>
          <img
            className="w-2/4 h-3/4 rounded-full  mx-auto mb-4"
            src="https://i.ibb.co/JW1HBYL/8f999c7fdd4e64338a63120cf0f331d1-removebg-preview.png"
            alt=""
          />
          <h4 className="font-semibold text-2xl">Great Service</h4>
        </div>
        <div data-aos="fade-down">
          <img
            className="w-2/4 h-3/4 rounded-full  mx-auto mb-4"
            src="https://i.ibb.co/2dSsFGM/authentic-seal-removebg-preview.png"
            alt=""
          />
          <h4 className="font-semibold text-2xl">Great Service</h4>
        </div>
        <div data-aos="zoom-out-left">
          <img
            className="w-2/4  rounded-full  mx-auto mb-4"
            src="https://i.ibb.co/886Wcgt/Fast-delivery-logo-design-vector-PNG-removebg-preview.png"
            alt=""
          />
          <h4 className="font-semibold text-2xl">fast Delivery</h4>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
