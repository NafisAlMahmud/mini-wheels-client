import { useLoaderData } from "react-router-dom";
import AllToysRow from "../AllToysRow/AllToysRow";
import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const myToys = useLoaderData();
  const [searchText, setSearchText] = useState("");

  // const filteredToy = myToys.filter((toy) => {
  //   toy.item.toLowerCase().includes(searchText.toLowerCase());
  // });

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // const handleSearch = () => {
  //   fetch(`http://localhost:5000/toysSearchByTitle/${searchText}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setJobs(data);
  //     });

  return (
    <div>
      <div className="mt-20">
        <div className="search-box p-2 text-center">
          <label className="mr-2 text-xl"></label>
          <input
            value={searchText}
            onChange={handleSearch}
            type="text"
            className="p-1"
          />
        </div>
        {/* <h2>Your Bookings {bookings.length}</h2> */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>

                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myToys.slice(0, 20).map((myToy) => (
                <AllToysRow key={myToy._id} myToy={myToy}></AllToysRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
