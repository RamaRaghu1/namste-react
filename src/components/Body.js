import RestaurantCard from "./RestaurantCard";
import {
  RESTAURANT_LIST_DESKTOP,
  RESTAURANT_LIST_MOBILE,
} from "../utils/constants";
import { IoFilter } from "react-icons/io5";
import { MdOutlineFoodBank } from "react-icons/md";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { isMobile } from "./Helper";
// import data from "../utils/RestaurantData.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      isMobile()
        ? "https://corsproxy.io/?" + RESTAURANT_LIST_MOBILE
        : "https://corsproxy.io/?" + RESTAURANT_LIST_DESKTOP

    );

    const json = await data.json();
    let resList;

    if (isMobile()) {
      resList =
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants;
    } else {
      const list0 =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const list1 =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const list2 =
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      resList = list0 || list1 || list2;
    }
    setListOfRestaurants(resList);
    setFilteredRestaurant(resList);
  };

  console.log(json);
  // setListOfRestaurants(
  //   data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  // );
  // setFilteredRestaurant(
  //   data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  // );

  // console.log(
  //   data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  // );
  
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }
  return (
    <div id="restaurants" className="py-10">
      <div className="mx-auto my-3 lg:my-10 md:w-4/5 overflow-hidden">
        <div className="grid justify-items-center grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-4  gap-y-12 lg:gap-x-8 md:gap-x-12 ">
          {!filteredRestaurant || filteredRestaurant.length === 0
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => <Shimmer key={i} />)
            : filteredRestaurant.map((restaurant) => (
                <Link
                  key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}
                >
                  <RestaurantCard resData={restaurant} />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
