# Props
- Passing props to a component is similar to passing argument tot the function
- At the end of the component is nothing but JS function and props is nothing but javascript argument
- props is in form of javascript object
- When you dynamically want to pass data to component, we pass it as props.


# Error: Each child in a list should have unique 'key' prop
- Whenever you render same component for multiple cards we use key keyword to uniquly represent that component.
- EX: <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
- Why we use key?
- 