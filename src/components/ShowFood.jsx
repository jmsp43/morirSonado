import { getFoods } from "../services/orders-api";
import { useState, useEffect } from 'react'
import { Link } from 'react'
import FoodItem from "./FoodItem";


export const ShowFood = () => {
  const [food, setFood] = useState([])
  // const [sectionOfFood, setSectionOfFood] = useState('')
  
      useEffect(() => {
        getFoods()
            //calling to get data
                .then(res => setFood(res.data))
            //setting the state with returned data
      }, [])
  
  // useEffect(() => {
    
  // },[])

      return(
            <div className="entireMenu">
          <ul>
            {food.map((foodItem) => {

                    return (
                        <div className="menuItem" key={foodItem._id}>
                        <FoodItem
                          foodItem={foodItem} />
                        </div>
                    )
                })}
              </ul> 
            </div>
        )
}

export default ShowFood