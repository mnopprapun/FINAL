import React, { useState, useEffect } from "react";
import '/Users/mathawudnopprapun/Development/phase5/graphicsCard-app/client/src/components/navbar.css'
import Cart from '../components/Cart.js'
import Filter from "../components/Filter.js";


function Shop() {
	const [items, setitems] = useState([]);
	const [cartsItems, setCartsItems] = useState([]);
	const [sort, setSort] = useState([])
	
	
	
	const sortItems = (event) => {
	console.log(event.target.value)
	const sort = event.target.value;
	items.sort()
	};


	useEffect(() => {
		fetch("http://localhost:3000/items", {
		  Mode: "no-cors",
		  Credentials: "include",
		})
		  .then((res) => res.json())
		  .then((items) => setitems(items));
		//   localCart = JSON.parse(localCart)
		//   if (localCart) setCartsItems(localCart)
	  }, []);

	  let addToCart = (items) => {
		let cartCopy = [...cartsItems];
		let {ID} = items;
		let existingItem = cartCopy.find(cartItem => cartItem.ID === ID);
		if (existingItem) {
		  existingItem.quantity += items.quantity //update item
	  } else { //if item doesn't exist, simply add it
		cartCopy.push(items)
	  }
	  setCartsItems(cartCopy)
	  let stringCart = JSON.stringify(cartCopy);
	  localStorage.setItem("cart", stringCart)
	  }
	  
	  let removeFromCart = (items) => {
		cartsItems.filter((x) => x.id !== items.id);
	   setCartsItems([]);
	   ;
	 };


	 return (
		<div className="content">
		  <div className="main">
			<Filter 
			items={items}
			count={items.length} 
			sortItems={sortItems}
			/> Limited to 1 Card per Checkout.
			<card className="card">
				<ul className="items">
			  {items.map((item) => {
				return (
				  <div style={{ width: "30rem" }} className="item" key={item.id}>
					<img variant="top" src={item.image_url} className="img" alt="Card" />
					<div>
					  <h2>{item.name}</h2>
					  <p>{item.description}</p>
					  <p className="price">${item.price}</p>
					  <p>Inventory Count: {item.inventory}</p>
					  <button variant="primary" onClick={() => addToCart(item)}>
						Add to Cart
					  </button>
					</div>
				  </div>
				);
			  })}
			</ul>
			</card>
			</div>
		  <div className="sidebar">
			<Cart
			  cartsItems={cartsItems}
			  removeFromCart={removeFromCart}
			  // total={total}
			/>
		  </div>
		</div>
	  );
	}
export default Shop;