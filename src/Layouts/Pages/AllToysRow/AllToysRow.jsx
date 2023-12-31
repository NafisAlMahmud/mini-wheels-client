import React from "react";
import { Link } from "react-router-dom";

const AllToysRow = ({ myToy }) => {
  const {
    _id,
    price,
    subcategory,
    category,
    quantity,
    description,
    toysname,
    img,
  } = myToy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-44 h-28">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toysname}</div>
            {/* <div className="text-sm opacity-50">{price}</div> */}
          </div>
        </div>
      </td>

      <td>{description.slice(10)}...</td>
      <td>{price}</td>
      <td>{quantity}</td>

      <th className="pl-8">
        <Link to={`/singleToys/${_id}`}>
          <button className="btn btn-outline">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
