import React, { useState, useEffect } from "react";
import '/Users/mathawudnopprapun/Development/phase5/graphicsCard-app/client/src/components/navbar.css'
import Cart from '../components/Cart.js'
import Filter from "../components/Filter.js";


function Shop(props) {
	const [items, setitems] = useState([]);
	const [cart, setCart] = useState([]);
	const [cartsItems, setCartsItems] = useState([]);
	const [sort, setSort] = useState([])
	const [cart_id, setCart_id] = useState(1)
	const [item_id, setItem_id] = useState("")
	
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


	//   let addToCart = (items) => {
	// 	if (items.id !== cartsItems.id ) {
	// 	   setCartsItems([...cartsItems, items]);
	// 	} else { setCartsItems([cartsItems])
	// 	}
	   
	//   };

	  let addToCart = (items) => {
		  console.log(items.id)
		let cartCopy = [...cartsItems];
		let ID = items.id;
		let existingItem = cartCopy.find(cartItem => cartItem.ID === ID);
		if (existingItem) {
		  existingItem.quantity += items.quantity //update item
	  } else { //if item doesn't exist, simply add it
		cartCopy.push(items)
	  }
	  setCartsItems(cartCopy)
	  let stringCart = JSON.stringify(cartCopy);
	  localStorage.setItem("cart", stringCart);
	  fetch("http://localhost:3000/cartsitems", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({ cart_id, item_id:items.id, user_id:props.user.id }),
	  }).then(res => res.json())
	  .then(res => setCartsItems([...cartsItems, res]))
	  }
	  
	  let removeFromCart = (items) => {
		cartsItems.filter((x) => x.id !== items.id);
	   setCartsItems([]);
	   fetch('http://localhost:3000/items/' + items.id, {
		method: "DELETE",
		headers: {
		  'Content-Type': 'application/json'
		}
	  })
	   ;
	 };

	 let updateInventory = (items) => {
		let updateInventory = {
		  ...items,
		  inventory: items.inventory - 1
		}
		let patchOptions = {
		  method: "PATCH",
		  headers: {
		  'Content-Type': 'application/json',
		  Accepts: 'application/json'
		  },
		  body: JSON.stringify(updateInventory)
		}
		fetch('http://localhost:3000/items/' + item_id, patchOptions)
		  .then(res => res.json())
		  .then(updateInventory => {
		  let newitemArray = items.map(item => items.id === items.inventory ? item = updateInventory : item)
		  setitems( newitemArray);
		  console.log(cartsItems)
		  })
		}


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
					  <button variant="primary" onClick={() => addToCart(item)} >
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
			  updateInventory={updateInventory}
			  items={items}
			  // total={total}
			/>
		  </div>
		</div>
	  );
	}
export default Shop;