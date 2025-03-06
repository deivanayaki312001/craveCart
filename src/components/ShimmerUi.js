const ShimmerUi = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <input
          placeholder="What do you crave for?"
          className="search-bar"
          type="text"
        />
         <button
          className="searchBtn"
        >
          Search
        </button>
        <button className="topRatedRestaurants">Top Rated Restaurants</button>
      </div>
      <div className="restaurant-cards">
        <div className="shimmerContainer">
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
        </div>
      </div>
    </div>
  );
};
export default ShimmerUi;
