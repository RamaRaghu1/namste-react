import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="flex p-2">
      <div className="flex flex-col space-y-2 justify-between w-9/12">
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="text-left py-4 my-2 border-b flex flex-row justify-between "
          >
            {/* food info */}
            <div className="flex flex-col w-9/12 p-2">
              <span className="font-semibold"> {item.card.info.name}</span>

              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-slate-500 text-xs line-clamp-2">
                {item.card.info.description}
              </p>
            </div>

            <div className="w-3/12 p-2">
              <div className="w-28  max-h-24 shrink-0 relative flex justify-center p-2">
                {item.card.info.imageId ? (
                  <div className="w-22 max-h-24 px-0 shrink-0 relative flex justify-center">
                    <img
                      src={CDN_URL + item.card.info.imageId}
                      loading="lazy"
                      className="w-28 h-24 object-cover object-center rounded-lg"
                    />

                    <button
                      className="absolute -bottom-6 w-24 text-center bg-white text-green-600 px-2  py-2 text-xs font-bold border border-slate-300 rounded-lg"
                      onClick={() => handleAddItem(item)}
                    >
                      Add+
                    </button>
                  </div>
                ) : (
                  <button
                    className="absolute -bottom-2 w-24 text-center bg-white text-green-600 px-2  py-2 text-xs font-bold border border-slate-300 rounded-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    Add+
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
