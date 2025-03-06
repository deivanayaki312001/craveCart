
//custom made Hook
import { useEffect, useState } from "react";
import { MENUURL } from "../utils/constants";

const useMenu = (resID) => {
  const [resData, setresData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data1 = await fetch(
      MENUURL+resID
    );
    //const data1= await fetch(MENUURL + resID + "&catalog_qa=undefined&submitAction=ENTER")
    const response = await data1.json();
    console.log(response);
    setresData(response.data);
    //console.log(resData?.cards[0]?.card?.card.text)
    //const {text} = resData?.cards[0]?.card?.card
    //console.log(text);
    //console.log(resData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);
  };
  return resData;
};
export default useMenu;
