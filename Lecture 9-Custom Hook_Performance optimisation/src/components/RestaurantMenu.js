import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu=()=>{

    const {resId} = useParams();

    const resInfo = useRestaurant(resId);


    // We will use this logic in custom hooks
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async ()=>{
    //     const data= await fetch(MENU_API+resId);
    //     const json= await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // };

    if(resInfo===null)
    {
        return <Shimmer/>
    }

    let {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="menu">
            <h1>{resInfo.cards[2].card.card.info.name}</h1>
            <h3>{resInfo.cards[2].card.card.info.cuisines.join(',')}</h3>
            <h3>{resInfo.cards[2].card.card.info.costForTwoMessage}</h3>
            <h3>{resInfo.cards[2].card.card.info.areaName}</h3>
            <h3>{resInfo.cards[2].card.card.info.sla.slaString}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    
                    itemCards.map((item) =>(
                        <li key={item.card.info.id}>
                            {item?.card?.info?.name} ---- {'Rs'}: {item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>
                    ))
                }                        
                
            </ul>
        </div>
    )

};

export default RestaurantMenu;