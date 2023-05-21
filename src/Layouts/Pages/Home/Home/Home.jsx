import useTitle from "../../../../hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Gallery from "../Gallery/Gallery";
import Partners from "../Partners/Partners";
import ToyCategory from "../ToyCategory/ToyCategory";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://cdn.amatterofstyle.eu/wp-content/uploads/2021/01/What-is-the-purpose-of-a-toy-car.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <ToyCategory></ToyCategory>
      <WhyUs></WhyUs>
      <Partners></Partners>
    </div>
  );
};

export default Home;
