import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleTab from "../../SingleTab/SingleTab";

const ToyCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("car");
  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data.slice(0, 3));
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="">
      <h2 className="text-6xl font-bold text-yellow-600 text-center py-4">
        Toys Collection
      </h2>
      <p className="w-2/3 text-center mx-auto py-4">
        Welcome to Discovery Toys! Here you will find the best toddler toys
        online that will help children enhance their developmental skills and
        learn the best ways to interact with the world around them. Whether you
        are looking for design builder toys, books, or exploratory toys, you
        will find the perfect toy through one of the largest online toy stores
        on the web.
      </p>
      <div className="tabs tabs-boxed justify-center">
        <button
          onClick={() => handleTabClick("car")}
          className={`tab ${activeTab === "car" && "tab-active"}`}
        >
          car
        </button>
        <button
          onClick={() => handleTabClick("bike")}
          className={`tab ${activeTab === "bike" && "tab-active"}`}
        >
          bike
        </button>
        <button
          onClick={() => handleTabClick("truck")}
          className={`tab ${activeTab === "truck" && "tab-active"}`}
        >
          truck
        </button>
      </div>
      <div className="grid lg:grid-cols-3 mt-10">
        {toys.map((toy) => (
          <SingleTab key={toy._id} toy={toy}></SingleTab>
        ))}
      </div>
    </div>
  );
};

export default ToyCategory;
