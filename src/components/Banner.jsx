import bannerImage from "../assets/images/image1.png";
const Banner = () => {
  return (
    <div className="bg-gray-100 lg:px-28 md:px-16 px-2 lg:py-16 md:py-16 py-12">
      <div className="lg:bg-orange-400 rounded-3xl px-12 lg:text-white flex lg:flex-row flex-col justify-center items-center">
        <div className="w-full text-center lg:text-left lg:mb-0 mb-8">
          <p className="lg:text-5xl md:text-4xl text-2xl font-semibold">
            Deliver Food To Your Door Step|
          </p>
          <p className="my-8 lg:text-xl">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>
        <img
          src={bannerImage}
          alt="Banner Image"
          className="lg:w-[50%] bg-orange-400 rounded-2xl w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
