import React from "react";

import Marquee from "react-fast-marquee";
const Partners = () => {
  return (
    <div className="my-20">
      <h2 className="text-6xl font-bold my-10 text-center">Our Partners</h2>
      <Marquee>
        <div className="flex gap-8 w-3/4">
          <img
            className="w-2/6 mx-auto"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="w-2/6 mx-auto"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="w-2/6 mx-auto"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <img
          className="mx-auto "
          src="data:image/png;base64,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"
          alt=""
        />
      </Marquee>
    </div>
  );
};

export default Partners;
