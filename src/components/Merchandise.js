import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Body from "./Body";
const Merchandise=()=>{
    const { dishID, dishName1 } = useParams();
    const [des,setdes]=useState();
    useEffect(()=>{
     fetchMerchandise();
    },[])
    const fetchMerchandise = async ()=>{
        const data = await fetch(`https://www.swiggy.com/mapi/restaurants/list/v5?lat=11.021961&lng=76.934543&collection=${dishID}&tags=layout_CCS_${dishName1}&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1
`);
console.log(dishID);
        const merchandiseItem=await data.json();
        console.log(merchandiseItem);
        console.log(merchandiseItem?.data?.cards[0]?.card?.card?.title);
        
        setdes(merchandiseItem?.data?.cards[0]?.card?.card?.description)
        console.log(des)
    }
    return(
        <div className="m-10">
           <div className="font-semibold text-3xl my-5">{dishName1}</div>
           <div>{des}</div>
        </div>
    )
}
export default Merchandise;
