import { useLoaderData } from "react-router-dom";
import AllToysRow from "../AllToysRow/AllToysRow";

import useTitle from "../../../hooks/useTitle";
import { useState } from "react";

const AllToys = () => {
  useTitle("All Toys");
  const myToys = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle the search
  const handleSearch = () => {
    const filteredResults = myToys.filter((toy) => {
      const toyName = toy.toysname || ""; // Set toyName to an empty string if toy.name is undefined or null
      const query = searchQuery || ""; // Set query to an empty string if searchQuery is undefined or null
      return toyName.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredToys(filteredResults);
  };
  return (
    <div>
      <div className="mt-20">
        <div className="mt-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search Toy..."
            className="px-4 py-2 rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Search
          </button>
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
              {searchQuery && filteredToys.length > 0
                ? // Render the filtered toys when there is a search query and filtered results
                  filteredToys.map((myToy) => (
                    <AllToysRow key={myToy._id} myToy={myToy} />
                  ))
                : // Render all toys when there is no search query or no filtered results
                  myToys
                    .slice(0, 20)
                    .map((myToy) => (
                      <AllToysRow key={myToy._id} myToy={myToy} />
                    ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
