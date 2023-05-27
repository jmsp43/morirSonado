import { getFoods } from "../services/orders-api";
import { useState, useEffect } from 'react'
import { Link } from 'react'
import Item from "./Item";


export const Order = () => {
      const [order, setOrder] = useState([])

    
      useEffect(() => {
            getFoods()
            //calling to get data
            .then(res => setOrder(res.data))
            //setting the state with returned data
      }, [])
    console.log(order)

      return(
            <div>
                <ul>
                {order.map((item) =>{
                    return (
                      <div className="menuItem">
                        <Item
                          item={item} />
                        {/* <Link to={`/${item.name}`}>{item.name}</Link> */}
                        </div>
                    )
                })}
              </ul> 
            </div>
        )
}

export default Order