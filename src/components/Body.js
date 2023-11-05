import RestaurantCard from "./RestaurantCard";
import { IoFilter } from "react-icons/io5";
import { MdOutlineFoodBank } from "react-icons/md";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(
  //   json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
      {/* <div className="search m-4 p-4"> */}
      {/* <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          /> */}
      {/* <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button> */}
      {/* </div> */}
      {/* <div className="search m-4 px-4 flex flex-row justify-evenly"> */}
      {/* <div className=" flex flex-row justify-evenly">
          <div>
            <MdOutlineFoodBank className="w-9 h-9" />
          </div>
          <p className="font-bold text-xl md:text-3xl  pb-4">
            Restaurants with online food delivery
          </p>

          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg line-clamp-2 "
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            <span>
              <IoFilter />
            </span>{" "}
          </button>
        </div> */}
      {/* </div> */}
      <div className="mx-auto my-3 lg:my-10 md:w-4/5 overflow-hidden">
        <div className="grid justify-items-center grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-4  gap-y-12 lg:gap-x-8 md:gap-x-12 ">
          {!filteredRestaurant || filteredRestaurant.length === 0
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => <Shimmer key={i} />)
            : filteredRestaurant.map((restaurant) => (
                <Link
                  key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}
                >
                  {/* If the restaurant is pure veg use new component */}
                  {/* {restaurant?.info?.promoted ? (
                    <RestaurantWithPromoted resData={restaurant} />
                  ) : ( */}
                  <RestaurantCard resData={restaurant} />
                  {/* )} */}
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
