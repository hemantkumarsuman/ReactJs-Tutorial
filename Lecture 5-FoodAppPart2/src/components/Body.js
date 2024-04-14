import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body =()=>{

    //state variable
    let [listOfRestaurant,setListOfRestaurant] = useState(resList);

    //Normal variable
    let listOfRestaurant2=[
        {
            "info": {
                "id": "66108",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                
                "costForTwo": "₹350 for two",
                "cuisines": [
                  "Pizzas"
                ],
                "avgRating": 4.1,
                
                "sla": {
                    "slaString": "45-50 mins",
                }
            }
        },
        {
            "info": {
                "id": "66109",
                "name": "KFC",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                
                "costForTwo": "₹450 for two",
                "cuisines": [
                  "Pizzas"
                ],
                "avgRating": 3.9,
                
                "sla": {
                    "slaString": "45-50 mins",
                }
            }
        },
        {
            "info": {
                "id": "66110",
                "name": "Mac Donald",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Pizzas"
                ],
                "avgRating": 4.4,
                
                "sla": {
                    "slaString": "45-50 mins",
                }
            }
        }
    ];

    return (
      <div className='body'>
        <div className='filter'>
            <button className="filter-btn" onClick={()=>{
                //update listOfRestaurant using function setListOfRestaurant()


                let filteredRestaurant=listOfRestaurant.filter(
                    (res)=> res.info.avgRating > 4
                );

                //update
                setListOfRestaurant(filteredRestaurant);
                console.log(filteredRestaurant);
            }}>
                Top Rated Restaurant
            </button>
        </div>
  
        <div className='res-container'>        
  
          {
            listOfRestaurant.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))
          }
        </div>
      </div>
  
      
    );
  }

  export default Body;