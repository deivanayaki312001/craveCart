import ResCard from "./ResCard";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import ShimmerUi from "./ShimmerUi";
import About from "./About";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
import { CDNPIC } from "../utils/constants.js";
import MerchandiseBanner from "./MerchandiseBanner";
import { title } from "process";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";



const Body = () => {
  const [resState, setresState] = useState([]);
  const [title3, setTitle3] = useState("");
  const [title2, setTitle2] = useState("");
  const [chain, setchain] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");
  const [headTxt, setheadTxt] = useState("");
  const [merchandiseArrayVar, setmerchandiseArrayVar] = useState([]);
  const OnlineStatus = useOnlineStatus();

  const {loggedInUser}= useContext(UserContext)
  console.log(loggedInUser);
  //const HeaderSubHeader = DiscountInfoResCard(ResCard);
  console.log("body rendered");
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft -= 500;
  };
  
  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft += 500;
  };
  useEffect(() => {
    fetchData();
  }, []);
  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0715183&lng=77.0024664&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&carousel=true&third_party_vendor=1"
    );
    const response = await data.json();
    console.log(response);
    setTitle2(response.data.cards[2].card.card.title);
    setTitle3(response.data.cards[1].card.card.header.title);
    setchain(
      response?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setresState(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredList(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setheadTxt(response?.data?.cards[0]?.card?.card?.header?.title);
    setmerchandiseArrayVar(
      response?.data?.cards[0]?.card?.card?.imageGridCards?.info
    );
    console.log(response?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  if (OnlineStatus === false) return <h1>Your Internet is down</h1>;

  return resState.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body-container mx-5">
      <div className="my-5 font-semibold">{loggedInUser},{headTxt}</div>
      <MerchandiseBanner merchandiseArray={merchandiseArrayVar} />
      <div className="flex gap-5">
        <input
          data-testid="searchIP"
          placeholder="What do you crave for?"
          className="w-64 p-1 pl-3 border border-gray-950 rounded-lg"
          type="text"
          value={searchTxt}
          onChange={(e) => {
            setsearchTxt(e.target.value);
          }}
        />
        <button
          className="bg-[rgb(252,148,51)] px-4 rounded-lg text-white"
          onClick={() => {
            console.log(searchTxt);
            const searchFilter = resState.filter((list) =>
              list?.info?.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setfilteredList(searchFilter);
          }}
        >
          Search
        </button>
        {console.log(chain)}
        <button
          className="bg-[rgb(252,148,51)] px-4 rounded-lg text-white"
          onClick={() => {
            const filterdList = resState.filter(
              (res) => res.info.avgRating > 4
            );
            setresState(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
       
      </div>
      <div className="my-5 font-semibold text-xl">{title3}</div>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-45 cursor-pointer hover:opacity-100"
          onClick={scrollLeft}
          size={40}
        />
        <div id="slider" ref={sliderRef}
        className="w-full h-full flex items-center overflow-x-scroll whitespace-nowrap scroll-smooth">
          {chain.map((chainRes) => (
            <div className="flex flex-wrap justify-center items-center text-wrap">
            <Link
              key={chainRes.info.externalRatings.id}
              to={"/restaurants/" + chainRes?.info?.id}
            >
              {" "}
              <ResCard resData={chainRes} />
              {/* below logic is uses when higher order component DiscountInfoResCard(ResCard) ie) HeaderSubHeader */}
              {/*{restaurantIndex.info.aggregatedDiscountInfoV3 &&
            Object.keys(restaurantIndex.info.aggregatedDiscountInfoV3).length > 0 ? (
              <HeaderSubHeader resData={restaurantIndex} />
            ) : (
              <ResCard resData={restaurantIndex} />
            )}*/}
            
            </Link>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-45 cursor-pointer hover:opacity-100"
          onClick={scrollRight}
          size={40}
        />
      </div>
      <div className="my-5 font-semibold text-xl">{title2}</div>

      <div className="flex flex-wrap justify-center items-center">
        {filteredList.map((restaurantIndex) => (
          <Link
            key={restaurantIndex.info.id}
            to={"/restaurants/" + restaurantIndex.info.id}
          >
            {" "}
            <ResCard resData={restaurantIndex} />
            {/* below logic is uses when higher order component DiscountInfoResCard(ResCard) ie) HeaderSubHeader */}
            {/*{restaurantIndex.info.aggregatedDiscountInfoV3 &&
            Object.keys(restaurantIndex.info.aggregatedDiscountInfoV3).length > 0 ? (
              <HeaderSubHeader resData={restaurantIndex} />
            ) : (
              <ResCard resData={restaurantIndex} />
            )}*/}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
