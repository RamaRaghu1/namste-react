import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, clearCart, decrementItem } from "../utils/cartSlice";

const FoodItem = () => {
  const disptach = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const getTotal = () => {
    const total = cartItems.reduce((sum, current) => {
      // Access the price property inside the nested structure
      const price = current?.card?.info?.price || 0;

      return sum + price;
    }, 0);

    console.log(`Total: ${total}`);
    return total;
  };

  const handleClearCart = () => {
    disptach(clearCart());
  };

  return (
    <div className="w-100% sm:h-[calc(100vh-80px)] flex md:items-center flex-col justify-center my-0 mx-auto md:text-center">
      <div
        className={` ${
          0 && !cartItems.length && "hidden"
        }  h-fit m-8 p-8 bg-white shadow-md font-poppins text-sm flex flex-col`}
      >
        <div className="flex justify-between mb-5 border-b-2 ">
          <div className="flex w-full pb-2 justify-between items-center">
            <span className="font-bold text-base sm:text-xl">Cart Items</span>
            <button
              className="text-xs sm:text-xl font-poppins bg-slate-900 px-2 py-1 text-white rounded-lg"
              onClick={handleClearCart}
            >
              {" "}
              Clear Cart
            </button>
          </div>
        </div>
        <div className="border-b-2">
          {cartItems.map((item) => {
            // console.log(item);
            return (
              <div
                key={item?.card?.info?.id}
                className="p-2 grid grid-cols-3 md:flex justify-evenly md:items-center gap-1 my-2 space-x-7"
              >
                <img
                  className="w-24 h-20 object-cover object-center rounded-lg"
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt=""
                  onError={(event) => (event.target.style.display = "block")}
                />
                <div className="text-base line-clamp-1 w-8/12 md:line-clamp-none lg:line-clamp-none md:w-60 md:text-lg">
                  {item?.card?.info?.name}
                </div>

                <div className="w-14 font-medium flex justify-center">
                  <span className="text-lg">
                    &#8377;
                    {Math.floor(
                      item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between pt-2 font-bold">
          <span className="text-xl">Total</span>
          <span className="text-xl">&#8377;{Math.floor(getTotal() / 100)}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
