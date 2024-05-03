import {IMG_CDN_URL} from "../../utils/config.js";

const RestrauntCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    locality,
    costForTwo,
    avgRating,
  }) => {
    return (
      <div className="m-4 p-4 w-[300px] bg-gray-100  rounded-lg hover:bg-gray-200">
        <img className="rounded-lg"
          src={
            IMG_CDN_URL
             +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold py-4 text-lg">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>{locality}</h4>
        <span>
        <h4>{avgRating}</h4>
          
          <h4>{costForTwo}</h4>
        </span>
      </div>
    );
  };

export default RestrauntCard;