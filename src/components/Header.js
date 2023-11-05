import { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../images/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="sticky flex top-0 justify-between items-center bg-white z-50 h-22 md:h-24 px-3 md:px-12 w-full shadow-md">
      <div className="h-full py-3">
        {/* Logo */}
        <Link to="/">
          <img
            className="lg:h-[75px] lg:w-[300px] h-[50px] w-[250px] px-4 "
            src={logo}
          ></img>
        </Link>
      </div>
      <div>
        <button className="flex items-center spacex-3 pr-2 md:pr-0 mr-5">
          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart className="h-6 w-10 " />
              <span className="absolute text-center right-1 -top-1 text-xs font-bold bg-[#D4145A] text-white rounded-full w-4 h-4">
                {cartItems.length}
              </span>
            </div>
          </Link>
          <span className="hidden md:inline-block font-bold text-black p-2">
            Cart
          </span>
        </button>
      </div>
    </div>
  );
};
export default Header;
