import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    locality,
    sla: { deliveryTime },
  } = resData?.info;

  const isRatingGreater = avgRating > 4 ? true : false;

  return (
    <>
      <div className="max-w-xs inline-flex flex-col space-y-2 rounded-md transform hover:scale-95 ">
        <div className="relative overflow-hidden rounded-md">
          <img
            className="rounded-2xl object-cover w-80 h-56"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <div className="w-full overflow-clip">
          <h1 className="font-bold text-base">{name}</h1>

          <p className="line-clamp-2 text-slate-500 break-words text-sm">
            {cuisines.join(", ")}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`text-xs text-white font-normal px-1 py-1 w-9 items-center ${
              isRatingGreater ? "bg-green-500" : "bg-[#F9A630]"
            }`}
          >
            &#9733;{avgRating}
          </span>

          <span className="text-sm text-slate-500 font-normal">
            {deliveryTime} mins
          </span>

          <span className="text-sm text-slate-500 font-normal">{locality}</span>
        </div>
      </div>
    </>
  );
};

// Higher order component
// input- restaurantCard=> PromotedRestaurantCard

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     <div>
//       <label className="absolute bg-black text-white m-2 p-1 rounded-lg z-50">
//         Veg
//       </label>
//       <RestaurantCard {...props} />
//     </div>;
//   };
// };

export default RestaurantCard;
