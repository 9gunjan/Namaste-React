import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { swiggy_menu_api_URL } from "../../utils/config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const params = useParams();
    const {resId} = params;
    
    //const [resInfo, setResInfo] = useState(null);
    //custom hook
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null ) return <Shimmer />

    
    const { name, city, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    
    return (
        <div className="menu">
            <h1>Restaurant id: {resId}</h1>
            <h2>Restaurant Name : {name}</h2>
            <h2>City : {city}</h2>
            <h2>Cuisines:{cuisines.join(" , ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
            {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}-Rs.{item.card.info.price/100}</li>)}
                
            </ul>
            
        </div>
    )
}

export default RestaurantMenu;