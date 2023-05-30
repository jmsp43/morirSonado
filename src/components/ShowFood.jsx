import { getFoods } from "../services/orders-api";
import { useState, useEffect } from 'react'
import FoodItem from "./FoodItem";


export const ShowFood = ({foodType}) => {
  const [food, setFood] = useState([])
  
      useEffect(() => {
        getFoods()
            //calling to get data
                .then(res => setFood(res.data))
            //setting the state with returned data
      }, [])


  const appetizers = food.filter(plate =>
    plate.section === 'Appetizers'
  )

  const combos = food.filter(plate => {
    plate.section === 'Combos'
  })

  const entrees = food.filter(plate => {
    plate.section === 'Entrees'
  })

  const bevs = food.filter(plate => {
    plate.section === 'Beverages'
  })

  const desserts = food.filter(plate => {
    plate.section === 'Desserts'
  })

  let mappedFood = []

  if (foodType === 'appetizers') {
    mappedFood = appetizers
    //setting the state didn't work either
    // setFood(mappedFood)
  } else if (foodType === 'entrees') {
    mappedFood = entrees
  } else if (foodType === 'combos') {
    mappedFood = combos
  } else if (foodType === 'beverages') {
    mappedFood = bevs
  } else if (foodType === 'desserts') {
    mappedFood = desserts
    console.log(desserts)
  }

      return(
            <div className="entireMenu">
          <ul>
            {/* doesn't work as mappedFood.map */}
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