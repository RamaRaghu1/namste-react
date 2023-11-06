import { useState } from "react";
import ItemList from "./ItemList";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  // const { title, itemCards, categories } = menu;
  return (
    <>
      {/* Header */}
      <div className=" w-full my-4 border-b-gray-100 p-4 justify-between bg-white ">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <FaChevronDown />
          </span>
        </div>
        {/* Accordion body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};

export default RestaurantCategories;
