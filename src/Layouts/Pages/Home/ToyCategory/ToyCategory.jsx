import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyCategory = () => {
  return (
    <div>
      <Tabs>
        <TabList className=" tabs tabs-boxed h-14">
          <div className="mx-auto my-auto">
            <Tab className="tab h-10">Cars</Tab>
            <Tab className="tab h-10">Bikes</Tab>
            <Tab className="tab h-10">Truck</Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3">
            <div>
              <h2>Soprts Car</h2>
            </div>
            <div>
              <h2>Racing Car</h2>
            </div>
            <div>
              <h2>luxury car</h2>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyCategory;
