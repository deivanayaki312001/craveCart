import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Menu = () => {
  const { resID } = useParams();
  const resData = useMenu(resID);
  
  const [showIndex,setshowIndex]=useState(null)
  //console.log(params);

  if (resData === null) return <ShimmerUi />;
  const groupedCardIndex = resData.cards.findIndex(
    (card) => card.groupedCard?.cardGroupMap?.REGULAR
  );
  console.log(resData);
  console.log(groupedCardIndex);
  const regularCards =
    resData.cards[groupedCardIndex].groupedCard.cardGroupMap.REGULAR.cards;
  const itemCardindex = regularCards.findIndex(
    (card) => card?.card?.card?.itemCards
  );
  console.log(itemCardindex);

  const { itemCards } =
    resData.cards[groupedCardIndex].groupedCard.cardGroupMap.REGULAR.cards[
      itemCardindex
    ].card.card;

  console.log(
    resData.cards[groupedCardIndex].groupedCard.cardGroupMap.REGULAR.cards
  );
  const categories = resData.cards[
    groupedCardIndex
  ].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  console.log(categories);
  console.log(categories[0].card.card.title);


  console.log(itemCards);
  console.log(
    resData.cards[groupedCardIndex].groupedCard.cardGroupMap.REGULAR.cards[
      itemCardindex
    ].card.card
  );
  console.log(
    resData.cards[groupedCardIndex].groupedCard.cardGroupMap.REGULAR.cards[
      itemCardindex + 1
    ].card.card
  );
  console.log(
    resData.cards[groupedCardIndex].groupedCard.cardGroupMap.REGULAR.cards[
      itemCardindex + 2
    ].card.card
  );
  console.log(
    resData.cards[groupedCardIndex].groupedCard.cardGroupMap.REGULAR.cards[
      itemCardindex + 3
    ].card.card
  );
  console.log(
    resData.cards[groupedCardIndex].groupedCard.cardGroupMap.REGULAR.cards[
      itemCardindex + 4
    ].card.card
  );
  const hotelName = resData?.cards[2]?.card?.card?.info?.name;
  const { avgRating, totalRatingsString, costForTwoMessage, locality } =
    resData?.cards[2]?.card?.card?.info;
  const cuisines = resData?.cards[2]?.card?.card?.info?.labels[2]?.message;
  const { slaString } = resData?.cards[2]?.card?.card?.info?.sla;
  console.log(cuisines);
  //const hotelName = resData?.cards[2]?.card?.card?.info?.name
  //console.log(hotelName)
  //console.log(name)
  return (
    <div className="ml-36 flex flex-col justify-start">
      <h1 className="font-bold text-2xl mb-6">{hotelName}</h1>
      <div className="p-5 border border-gray-950 rounded-lg mr-20">
        <div>
          {`⭐ ${avgRating}  (${totalRatingsString})` +
            "     " +
            costForTwoMessage}
        </div>
        <h1 className="font-semibold text-lg text-orange-600">{cuisines}</h1>
        <div>{locality}</div>
        <div>{slaString}</div>
      </div>
      <div className="mt-12">
        {categories.map((category,index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showHide={index===showIndex?true:false}
            
            setshowIndex = {()=>setshowIndex(showIndex === index? null:index) }
            
          />
        ))}
      </div>
    </div>
  );
};
export default Menu;
