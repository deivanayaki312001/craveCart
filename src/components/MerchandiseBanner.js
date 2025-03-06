import { CDNPIC } from "../utils/constants.js";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const MerchandiseBanner = ({ merchandiseArray = [] }) => {
  const scrollRight = () => {
    const slider = document.getElementById("slider");
    if (slider) slider.scrollLeft += 500;
  };

  const scrollLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) slider.scrollLeft -= 500;
  };

  return (
    <div className="flex items-center mb-10">
      <MdChevronLeft
        className="opacity-45 cursor-pointer hover:opacity-100"
        onClick={scrollLeft}
        size={40}
      />
      <div
        id="slider"
        className="w-full h-full flex items-center overflow-x-scroll whitespace-nowrap scroll-smooth"
      >
        {merchandiseArray?.map((bannerImg) => {
          if (!bannerImg?.action?.link) return null;

          let collectionID = "defaultID";
          try {
            const linkUrl = new URL(bannerImg.action.link, "https://www.swiggy.com"); // Ensure valid URL
            const urlParams = new URLSearchParams(linkUrl.search);
            collectionID = urlParams.get("collection_id") || "defaultID";
            console.log(collectionID);
          } catch (error) {
            console.error("Invalid URL:", bannerImg.action.link);
          }

          const text = bannerImg?.action?.text || "defaultText";

          return (
            <div key={bannerImg?.id} className="min-w-[176px] flex justify-center">
              <Link to={`/merchandise/${collectionID}/${text}`}>
                <img
                  className="w-44 h-44 object-contain"
                  src={CDNPIC + bannerImg?.imageId}
                  alt={text}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <MdChevronRight
        className="opacity-45 cursor-pointer hover:opacity-100"
        onClick={scrollRight}
        size={40}
      />
    </div>
  );
};

export default MerchandiseBanner;
