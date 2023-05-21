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
      const toyName = toy.toysname || "";
      const query = searchQuery || "";
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
                ? filteredToys.map((myToy) => (
                    <AllToysRow key={myToy._id} myToy={myToy} />
                  ))
                : myToys
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
