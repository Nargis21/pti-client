import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";

const apiUrl =
  "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";

const ResponsiveSlider = ({ category }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setFoods(data.Items))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const popularFoods = foods?.filter((food) => food.IsPopular);
  const recommendedFoods = foods?.filter((food) => food.IsRecommended);
  console.log(popularFoods, recommendedFoods);
  let foodInfo;
  if (category == "Popular") {
    foodInfo = popularFoods;
  } else {
    foodInfo = recommendedFoods;
  }

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
          infinite: true,
        },
      },
    ],
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 lg:px-28 md:px-16 px-2 lg:pb-20 md:pb-16 pb-12">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">{category}</h2>
        <button
          className="text-orange-500 font-semibold mr-4"
          onClick={() => setIsOpen(true)}
        >
          Add More
        </button>
      </div>
      <Slider {...settings}>
        {foodInfo?.map((food) => (
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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ResponsiveSlider;
