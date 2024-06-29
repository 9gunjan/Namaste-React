import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../utils/config";
import { addItem } from "../../utils/cartSlice";
const ItemList = ({items,dummy}) => {
    console.log({dummy})

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatches an action
        dispatch(addItem(item))
    }
    return <div>
        <div >
            {items.map(item => <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" >
                
                <div data-testid = "foodItems" className="w-9/12">
                <div className="py-2">
                <span >{item.card.info.name}</span> 
                <span>- ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">
                {item.card.info.description}
                </p>
                </div>
                <div   className=" w-3/12 p-4">
                <div className="absolute">
                <button className="p-2 bg-lime-800 text-white mx-15 rounded-lg cursor-pointer" onClick={() => handleAddItem(item)}>Add+</button>
                </div>
                <img src={IMG_CDN_URL + item.card.info.imageId} className="rounded-lg"></img>
                </div>
            </div>
            )}
        </div>
    </div>

}

export default ItemList;