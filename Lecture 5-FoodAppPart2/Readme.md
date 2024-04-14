# Restructure the lecture 4 code for better readability
- Create seperate files for separete components
- All hardcoded data should be placed inside utils folder

# import export
- There r 2 kind of export/import: 1- default  2- named
- 1: There can be only one default export/import in file
  2: If we to export mutiple things then we use named export/import.

     Example: What ever thing we want to export we will use export keyword in front .
              export const logo_url='https://tinyurl.com/5ffjfvf2';

              When we import we will use syntax=> import { logo_url } from "../utils/constants";
   
# REACT HOOKS
We will learn by developing one feature-> when clicked of button it should display card/restaurant whose rating is greater than 4.
- When we are storing data in normal JS variable and apply filter logic then we can see that restaurant whose avgRating>4 shown in console but 
  UI is not updating.
  To solve this problem virtual DOM come into picture which sync our UI with data.

  We will store data inside state variable.
  SYNTAX=> let [listOfRestaurant,setListOfRestaurant] = useState([]); -> This is destructuring of array.
  Simplification of above code lines,
  useState() return array,
  let arr=useState();
  let listOfRestaurant= arr[0];
  let setListOfRestaurant= arr[1];

  
  Here, 
  listOfRestaurant -> state variable
  setListOfRestaurant -> function which is helpful to update state variable. In our case we will store result of filter logic in result variable
                        and pass it in setListOfRestaurant(result).

                        let filteredRestaurant=listOfRestaurant.filter(
                        (res)=> res.info.avgRating > 4
                        );
                        //update
                        setListOfRestaurant(filteredRestaurant);

  useState -> It takes default parameter which indicate default value of listOfRestaurant.
  useState is react Hook which we need to import from react-> import { useState } from "react";


- NOTE: Whenever state variable update react re-render the component.