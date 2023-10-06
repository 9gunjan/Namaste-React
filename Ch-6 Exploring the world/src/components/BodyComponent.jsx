import { useState , useEffect} from "react";
import { restaurantList } from "../config.js";
import RestrauntCard from "./RestrauntCard.jsx";
import Shimmer from "./Shimmer.jsx";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText?.toLowerCase())
  );
  return filterData;
}



const BodyComponent = () => {
 
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    //API CALL
    getRestaurants();

  },[]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5307887&lng=77.3834021&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    

  //CONDITIONAL RENDERING

  //EARLY RETURN OR NOT RENDER COPONENT
 // if allRestaurants is empty don't render restaurants cards
  if(!allRestaurants) return null;

  if(filteredRestaurants.length === 0) return <h1>No Restaurant match your filtered search</h1>
  

  return(allRestaurants.length === 0) ? (<Shimmer/>) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {allRestaurants?.length === 0 ?  <Shimmer />  : (
      <div className="restrauntList">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestrauntCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
      )}
    </>
  );
};

  export default BodyComponent;

  