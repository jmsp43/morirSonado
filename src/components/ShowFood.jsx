import { getFoods } from "../services/orders-api";
import { useState, useEffect } from 'react'
import FoodItem from "./FoodItem";


export const ShowFood = ({foodType}) => {
  const [food, setFood] = useState([])
  const [mappedFood, setMappedFood] = useState(null)

      useEffect(() => {
       fetchData()
      }, [foodType])

  async function fetchData() {
    
    let result = await getFoods()
    setFood(result.data)

  const appetizers = food.filter(plate =>
    plate.section === 'Appetizers'
  )

  const combos = food.filter(plate =>
    plate.section === 'Combos'
)

  const entrees = food.filter(plate => 
    plate.section === 'Entrees'
  )

  const bevs = food.filter(plate => 
    plate.section === 'Beverages'
  )

  const desserts = food.filter(plate => 
    plate.section === 'Desserts'
  )

    console.log(bevs)
    console.log(desserts)
  if (foodType === 'appetizers') {
    setMappedFood(appetizers)
  } else if (foodType === 'entrees') {
    setMappedFood(entrees)
  } else if (foodType === 'combos') {
    setMappedFood(combos)
  } else if (foodType === 'beverages') {
    setMappedFood(bevs)
  } else if (foodType === 'desserts') {
    setMappedFood(desserts)
  }
  }
  

      return(
            <div className="entireMenu">
          <ul>
            {/* doesn't work as mappedFood.map */}
            {mappedFood ? mappedFood.map((foodItem) => {

                    return (
                        <div className="menuItem" key={foodItem._id}>
                        <FoodItem
                          foodItem={foodItem} />
                        </div>
                    )
                }): <p>mappedFood empty</p>}
              </ul> 
            </div>
        )
}

export default ShowFood