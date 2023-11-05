import img from "../images/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  const goToRestaurants = () => {
    const element = document.getElementById("restaurants");
    element.scrollIntoView();
  };

  return (
    <>
      <section className="bg-red-100  items-center rounded-b-[50px]">
        <div className="px-8 lg:px-4 sm:w-8/12  py-6  mx-auto">
          <div className="flex flex-row justify-between items-center">
            {/* About */}
            <div className="text-start sm:max-w-md space-y-4 ">
              <h1 className="text-4xl font-extrabold  lg:text-6xl text-[#45474B] font-serif">
                Order food online in{" "}
                <span className="text-[#BB2525]">Chennai</span>
              </h1>

              <p className="text-[#BB2525] font-semibold">
                The World of Food, Just a Click Away.
              </p>
              {/* button */}
              <div>
                <Link
                  className="group text-white w-fit px-2 py-2  flex items-center rounded-lg bg-[#BB2525] cursor-pointer font-semibold"
                  smooth
                  duration={500}
                  onClick={() => goToRestaurants()}
                >
                  Explore Foodie Delights
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Hero Img */}
            <div className="hidden lg:block ">
              <img src={img} className="w-[400px] h-[400px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
