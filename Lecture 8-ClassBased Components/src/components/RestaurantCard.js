import { CDN_url } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData}=props;
    console.log(props);
    return (
      <div className='res-card'>
        <img className='res-logo' alt='res-logo' src={CDN_url+resData.info.cloudinaryImageId}/>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(', ')}</h4>
        <h4>{`Rating: ${resData.info.avgRating} star`}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{`Delivery Time: ${resData.info.sla.slaString}`}</h4>
      </div>
    );
  }

  export default RestaurantCard;