import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems,setShowIndex,dummy}) => {
    // const[showItems, setShowItems] = useState(false); //for accordian header
    // {/*This function will show and hide our ItemList (Accordian body) */}
    const handleClick = () => {
           setShowIndex();
    };
    //console.log(data);
    return <div >
        {/*Accordian header */}
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 "  >
        <div className="flex justify-between cursor-pointer" onClick= {handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {/*Accordian Body */}
             {showItems && <ItemList items = {data.itemCards} dummy={dummy}/>} {/*If showItems is true then only show the body */}
            </div>
        
    </div>
}

export default RestaurantCategory;