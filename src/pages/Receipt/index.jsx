import React from "react";
import { deleteOrder } from "../../services/orders-api";
import { getOrders } from "../../services/orders-api";
import { useState, useEffect } from "react";

function Receipt() {
  const deleteAnOrder = () => {
    deleteOrder(id);
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, [orders]);

  async function fetchData() {
    let result = await getOrders();
    setOrders(result.data);
    console.log(orders)
  }

  return (
    <div className="entireMenu">
      <ul>
        {orders ? (
          orders.map((order) => {
            return (
              <div className="orderDiv" key={order._id}>
                Order:
                <br />
                {/* seperate map of items within each order here */}
                {/* {orders.items.map((item) => {
                  return (
                    <div className="itemsDiv" key={order._id}>
                      Items in Order:
                      <br />
                      {order.items[item].section}
                      <br />
                      {order.items[item].name}
                      <br />
                      {order.items[item].description}
                      <br />
                    </div>
                  );
                })} */}
              <br/>
              {order.items[0].name}
              <br/>
              {order.items[0].description}
                <br />
                <div>
                  <button onClick={deleteAnOrder}>Delete Order</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Orders Added</p>
        )}
      </ul>
    </div>
  );
}

export default Receipt;
