import { useState } from "react";
import CategoryItems from "./CategoryItems";

const RestaurantCategory = (props) => {
  const { data , showHide,setshowIndex } = props;
  //const [showHide , setshowHide] = useState(false)
  console.log(data);
  const showOrHide = ()=>{
     //setshowHide(!showHide)
     setshowIndex();
  }
  return (
    <div className="mb-4 mt-4 mr-20  flex flex-col justify-start gap-5">
      <div className="flex justify-between  rounded-lg items-center cursor-pointer" onClick={showOrHide}>
        <h1 className="font-bold">{data.title} {`(${data.itemCards.length})`}</h1>
        <img
          className="w-[16] h-[16]"
          src="https://img.icons8.com/ios-glyphs/30/000000/expand-arrow.png"
        />
      </div>
      {showHide && <CategoryItems item={data.itemCards}/>}
      <div className="bg-slate-200 h-3"></div>
      
    </div>
  );
};
export default RestaurantCategory;
