import "./App.css";
import React, { Component } from 'react';
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0.0);
  function handleAll(props) {
    setCart([...cart, props]);
    setPrice(price + props.price);
  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item) => (
        // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} price={item.price} description={item.description} image={item.image} function={handleAll}></BakeryItem>
      ))}

      <div>
        <h2>Cart</h2>
        <div>
          {cart.map((item) => (<p> {item.name} </p>))}
          <p>
            Toal Price: {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
