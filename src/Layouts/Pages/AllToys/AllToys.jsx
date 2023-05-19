import { useLoaderData } from "react-router-dom";
import AllToysRow from "../AllToysRow/AllToysRow";

const AllToys = () => {
  const myToys = useLoaderData();
  return (
    <div>
      <div className="mt-20">
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
              {myToys.map((myToy) => (
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
