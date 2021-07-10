import React, { useState, useEffect } from "react";


export default function WishList() {
const [cartsItem, setCartsItem] = useState([])

useEffect( () => {
	fetch('http://localhost:3000/cartsitems')
	.then(res => res.json())
})

	return (
		<div>
			
		</div>
	)
}
