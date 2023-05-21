import React from "react";
import { Link } from "react-router-dom";

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
  } = toy;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toysname}</h2>
        <p>{description}</p>
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
