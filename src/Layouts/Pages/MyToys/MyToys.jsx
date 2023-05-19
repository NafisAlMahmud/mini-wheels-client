import { useLoaderData } from "react-router-dom";
import MyToysTable from "../MyToysTable/MyToysTable";

const MyToys = () => {
  const myToys = useLoaderData();
  return (
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
              <MyToysTable key={myToys._id} myToy={myToy}></MyToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
