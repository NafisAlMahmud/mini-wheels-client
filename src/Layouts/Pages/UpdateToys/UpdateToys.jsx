import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const toy = useLoaderData();
  const handleToysUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const subcategory = form.subcategory.value;
    const toysname = form.toysname.value;
    const quantity = form.quantity.value;

    const category = form.category.value;
    const description = form.description.value;
    const img = form.img.value;
    const email = form.email.value;

    const newToys = {
      name,
      price,
      subcategory,
      category,
      description,
      toysname,
      img,
      email,
      quantity,
    };
    console.log(newToys);

    // send data to server
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toys Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  const {
    name,
    _id,
    email,
    price,
    subcategory,
    category,
    quantity,
    description,
    toysname,
    img,
  } = toy;
  return (
    <div>
      <div className="bg-slate-400 p-24 text-amber-500">
        <h2 className="text-3xl font-bold bg-stone-600 rounded-lg p-3 w-1/5">
          Update Toys
        </h2>
        <form onSubmit={handleToysUpdate}>
          {/* name */}
          <div className="md:flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={name}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Toys Name</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={toysname}
                  type="text"
                  name="toysname"
                  placeholder="Toys Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* price and subcategory */}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={price}
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Subcategory </span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={subcategory}
                  type="text"
                  name="subcategory"
                  placeholder="Subcategory"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* category && des */}
          <div className="md:flex">
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={category}
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={quantity}
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/3 ml-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={description}
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* photo */}
          <div className="">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo URL </span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={img}
                  type="text"
                  name="img"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email </span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={email}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update Toys"
            className="btn btn-block mt-5 bg-yellow-600 text-slate-600"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateToys;
