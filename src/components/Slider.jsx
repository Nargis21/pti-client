import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const apiUrl =
  "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";

const ResponsiveSlider = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFoods(data), console.log(data.Items);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 lg:px-28 md:px-16 px-2 lg:py-20 md:py-16 py-12">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Popular</h2>
        <button className="text-orange-500 font-semibold mr-4">Add More</button>
      </div>
      <Slider {...settings}>
        {foods?.Items?.map((food) => (
          <div key={food.Id} className="rounded-xl pr-4">
            <img
              src={food.ImageUrl}
              alt={food.Name}
              className=" h-64 object-cover rounded-xl"
            />

            <h3 className="text-xl text-center mt-2">{food.Name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
