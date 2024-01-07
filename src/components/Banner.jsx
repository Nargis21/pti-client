import bannerImage from "../assets/images/image1.png";
const Banner = () => {
  return (
    <div className="bg-gray-100 lg:px-28 md:px-16 px-2 lg:py-24 md:py-16 py-12">
      <div className="lg:bg-amber-500 rounded-3xl lg:px-12 lg:text-white flex lg:flex-row flex-col justify-center items-center">
        <div className="w-full text-center lg:text-left lg:mb-0 mb-8">
          <p className="lg:text-5xl md:text-4xl text-3xl font-semibold">
            Deliver Food To Your Door Step|
          </p>
          <p className="my-8 lg:text-xl">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>
        <div className="w-full lg:bg-amber-500 md:bg-orange-400 bg-orange-400 rounded-3xl">
          <img
            src={bannerImage}
            alt="Banner Image"
            className="  lg:mt-0 md:mt-[-100px] mt-[-60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
