import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_URL } from "../utils/constants";
import RestaurantCategories from "./RestaurantCategories";
import { FiClock } from "react-icons/fi";
import { TbCoinRupee, TbClockHour5 } from "react-icons/tb";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <p>Loading...</p>;

  const {
    name,
    cuisines,
    locality,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla: { deliveryTime },
  } = resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);

  const resDesktopMenu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const resMobileMenu =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = [
    ...(resDesktopMenu || []),
    ...(resMobileMenu || []),
  ].filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);

  return (
    <div className="text-center">
      {/* Restaurant Information  */}
      <div className="relative md:w-6/12 w-4/5 mx-auto my-5 px-4 ">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-4">
            <div>
              <h1 className="text-xl font-bold">{name}</h1>
            </div>
            <div>
              <p className="text-xs text-start">{cuisines.join(", ")}</p>
              <p className="text-xs text-start font-bold">{locality}</p>
            </div>
          </div>
        </div>
        <div className="w-full my-4 border border-dashed"></div>

        {/* icons */}

        <div>
          <div className=" flex space-x-3 flex-row">
            <div>
              <TbClockHour5 className="w-7 h-7" />
            </div>
            <p className="font-bold text-sm">{deliveryTime} minutes</p>

            <div>
              <TbCoinRupee className="w-7 h-7" />
            </div>
            <span className="font-bold text-sm ">{costForTwoMessage}</span>
          </div>
        </div>
      </div>
      {/* Categories Accordion */}

      <div className="md:w-6/12 w-3/5 mx-auto my-5 bg-gray-100 justify-between">
        {categories.map((category, index) => (
          <RestaurantCategories
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
