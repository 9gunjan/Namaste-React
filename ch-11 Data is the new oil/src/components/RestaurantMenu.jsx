import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { swiggy_menu_api_URL } from "../../utils/config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const dummy = "Dummy data"; //to understand Props drilling

    const params = useParams();
    const {resId} = params;
    
    //const [resInfo, setResInfo] = useState(null);
    //custom hook
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    
    if(resInfo === null ) return <Shimmer />

    
    const { name, city, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    
    return (
        <div className="text-center">
            
            <h2 className="font-bold my-6 text-2xl">Restaurant Name : {name}</h2>
            <h2 className="font-bold text-lg">Cuisines: {cuisines.join(" , ")}</h2>

            {/*Categories Accordian */}
            {categories.map((category,index) => 
            //CONTROLLED COMPONENET
            <RestaurantCategory 
            key={category?.card?.card.title} 
            data ={category?.card?.card}
            showItems = {index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy = {dummy}
             />)}
        </div>
    )
}

export default RestaurantMenu;