// TODO: create a component that displays a single bakery item
import React, { Component } from 'react';

export default function BakeryItem(props) {
    return (
        <div>
            <div className="BakeryItemTitle">{props.name} </div>
            <img src={props.item.image}></img>
            <p class="BakeryItemPrice">{props.price}</p>
            <p class="BakeryItemDescription">{props.description}</p>
            <button onClick={() => props.function(props.item)}>Add to Cart</button>
        </div >
    )
}