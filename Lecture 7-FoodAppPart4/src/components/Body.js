import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body =()=>{

    //state variable
    let [listOfRestaurant,setListOfRestaurant] = useState([]);

    const [filterRestaurant,setFilterRestaurant] = useState([]);

    const [searchRes,SetSearchRes] = useState('');

    useEffect(()=>{
      fetchdata();
    },[]);

      

    const fetchdata =async ()=>{
      const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9852641&lng=77.7188677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      
      const json = await data.json();

      console.log(json);

      setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
      
      setFilterRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };

    

    //Conditional rendering
    if(listOfRestaurant.length === 0){
      return <Shimmer/>
    }

    return (
      <div className='body'>
        <div className='filter'>
            <div className="search">
              <input type="text" className="search-box" value={searchRes} 
              onChange={(e)=>{
                SetSearchRes(e.target.value)
              }}/>
              <button onClick={()=>{
                //Filter the res card and show it on UI
                
                console.log(searchRes);

                const filteredRestaurant=listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchRes.toLowerCase()));
                
                setFilterRestaurant(filteredRestaurant);
                
              }}>
                Search
              </button>
            </div>


            <button className="filter-btn" onClick={()=>{
                //update listOfRestaurant using function setListOfRestaurant()


                let filteredRestaurant=listOfRestaurant.filter(
                    (res)=> res.info.avgRating > 4
                );

                //update
                setListOfRestaurant(filteredRestaurant);
                //console.log(filteredRestaurant);
            }}>
                Top Rated Restaurant
            </button>
        </div>
  
        <div className='res-container'>        
  
          {
            filterRestaurant.map((restaurant)=>(
              <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id}>
                <RestaurantCard  resData={restaurant}/>
              </Link>
              
            ))
          }
        </div>
      </div>
  
      
    );
  }

  export default Body;