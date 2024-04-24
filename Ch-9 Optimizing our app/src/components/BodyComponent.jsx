import { useState , useEffect} from "react";
import { restaurantList } from "../../utils/config.js";
import RestrauntCard from "./RestrauntCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus.js";


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

    // Optional Chaining
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
      return <h1>Looks like you are offline. Please check your internet connection</h1>
    }
    
    

  //CONDITIONAL RENDERING

  //EARLY RETURN OR NOT RENDER COPONENT
 // if allRestaurants is empty don't render restaurants cards
  if(!allRestaurants) return null;

  //if(filteredRestaurants.length === 0) return <h1>No Restaurant match your filtered search</h1>
  

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
            <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><RestrauntCard  {...restaurant.info} /></Link>
          );
        })}
      </div>
      )}
    </>
  );
};

  export default BodyComponent;

  