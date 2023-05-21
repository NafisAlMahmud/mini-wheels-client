import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
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
            src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/06/Concept-feedback-service-customer-experience-rating-1536x1229.jpg"
            alt=""
          />
          <h4 className="font-semibold text-2xl">Great Service</h4>
        </div>
        <div data-aos="fade-down">
          <img
            className="w-2/4 h-3/4 rounded-full  mx-auto mb-4"
            src="https://img.freepik.com/premium-vector/authentic-product-label-100-percent-authentic-product-vector-logo-badges_526569-1113.jpg?w=2000"
            alt=""
          />
          <h4 className="font-semibold text-2xl">Great Service</h4>
        </div>
        <div data-aos="zoom-out-left">
          <img
            className="w-2/4  rounded-full  mx-auto mb-4"
            src="https://static.vecteezy.com/system/resources/previews/005/584/216/original/fast-delivery-icon-fast-delivery-logo-free-vector.jpg"
            alt=""
          />
          <h4 className="font-semibold text-2xl">Great Service</h4>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
