import { rankings } from "match-sorter";
import React from "react";
import { useLoaderData } from "react-router-dom";

const AllSingleToys = () => {
  const singleToys = useLoaderData();
  const {
    _id,
    rating,
    price,
    subcategory,
    category,
    quantity,
    description,
    toysname,
    img,
  } = singleToys;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-20">
      <figure>
        <img className="w-3/4 h-3/4" src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-6xl text-orange-500">{toysname}!</h2>
        <div>
          <p className="text-lg font-semibold  mt-10">{description}</p>
          <p className="text-lg  mt-8">Category: {category}</p>
          <p className="text-lg  mt-8">Sub Category: {subcategory}</p>
          <p className="text-lg  mt-8">Rating: {rating}</p>
          <p className="text-lg  mt-8">price: ${price} </p>
        </div>
      </div>
    </div>
  );
};

export default AllSingleToys;
