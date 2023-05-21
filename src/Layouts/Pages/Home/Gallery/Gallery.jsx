const Gallery = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold py-10">Gallery</h2>
      <div
        className="grid grid-cols-3 mx-auto"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div>
          <img
            className="w-3/4 h-3/4 mx-auto"
            src="https://5.imimg.com/data5/SELLER/Default/2021/12/GF/JI/DZ/102064656/patoys-baby-car-toy-vehicle-4x4-rechargeable-battery-operated-ig-kids-car-1000x1000.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-3/4 h-3/4 mx-auto"
            src="https://images.othoba.com/images/thumbs/0494458_car-toy-for-kids.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-3/4 h-3/4 mx-auto"
            src="https://www.littleriders.com.au/assets/full/XMX-615-R.jpg?20230419134613"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-3/4 h-3/4 mx-auto"
            src="https://isakaabengaluru.com/wp-content/uploads/2022/08/H6b6d61ae209449eeab0e22884de5cb0cr.jpg_960x960.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-3/4 h-3/4 mx-auto"
            src="https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/208054/1.jpg?2735"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-3/4 h-3/4 mx-auto"
            src="https://www.littleriders.com.au/assets/alt_1/XMX-615-R.jpg?20230419134613"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
