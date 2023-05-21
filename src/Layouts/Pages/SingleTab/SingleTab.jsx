import { rankings } from "match-sorter";
import React from "react";
import { Link } from "react-router-dom";
// import { AiFillStar } from "react-icons/fa";

const SingleTab = ({ toy }) => {
  const {
    _id,
    price,
    subcategory,
    category,
    quantity,
    description,
    toysname,
    img,
    rating,
  } = toy;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-[250px]" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toysname}</h2>
        <div className="flex mt-4">
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="flex">
          <p className="flex">Rating: {rating} </p>
          {/* <AiFillStar></AiFillStar> */}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/singleToys/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTab;
