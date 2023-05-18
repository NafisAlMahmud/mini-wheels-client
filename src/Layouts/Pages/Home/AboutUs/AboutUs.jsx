const AboutUs = () => {
  return (
    <div className="my-10">
      <div className="grid md:grid-cols-2">
        <div>
          <img
            className="md:w-2/4 mx-auto"
            src="https://images.unsplash.com/photo-1515281239448-2abe329fe5e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwc3RvcmV8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="md:w-3/4">
          <h2 className="font-bold text-3xl text-left ">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            necessitatibus! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Labore, accusantium quia, quae eveniet deleniti alias culpa
            consequatur distinctio sit, libero eius voluptatum quidem odio in!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
