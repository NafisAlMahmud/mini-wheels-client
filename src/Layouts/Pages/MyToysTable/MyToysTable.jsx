import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysTable = ({ toy, toys, setToys }) => {
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

  const handleDelete = () => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addToys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = toys.filter((to) => to._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };
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

      <td>{description}</td>
      <td>{price}</td>

      <td>{quantity}</td>

      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-600 mr-4  btn-outline"
        >
          Delete
        </button>
        <Link to={`/toys/${_id}`}>
          <button>Edit</button>
        </Link>
      </td>
    </tr>
  );
};

export default MyToysTable;
