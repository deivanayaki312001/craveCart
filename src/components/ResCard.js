import { CDNPIC } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ResCard = (props) => {
  //const {resName,cuisine,rating,time}=props;
  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, costForTwocost, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3 || {};

  return (
    <div data-testid="restaurantCard" className="flex flex-col p-4 w-64 min-h-[380px] rounded-xl bg-transparent mx-5 gap-1 transition-transform duration-300 hover:scale-95">
      <div className="w-full h-full relative">
        <img
          className="w-64 max-h-36 object-cover rounded-xl"
          src={CDNPIC + resData.info.cloudinaryImageId}
          alt="hotelPhoto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-30 rounded-xl"></div>
        {header && subHeader && (
          <div className="absolute bottom-0 left-0 w-full  text-white font-bold px-3 py-1 text-xl text-left">
            {header + " " + subHeader}
          </div>
        )}
      </div>
      <div className="text-xl font-semibold py-2">{name}</div>
      <div>{cuisines.join(", ")}</div>
      <div>{costForTwocost}</div>
      <div>{avgRating} Rating</div>
      <div>{deliveryTime} minutes</div>
    </div>
  );}
export default ResCard;


// EXAMPLE FOR HIGHER ORDER COMPONENTS

//export const DiscountInfoResCard = (ResCard) => {
//  return (props) => {
//    const { resData } = props;
//    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3 || {};
//
//    return (
//      <div className="relative">
//        <ResCard {...props} />
//        
//      </div>
//    );
//  };
//};
//
