import React from "react";

export default function Filter({items, sortItems}) {

  return ( 
    <div className="filter">
      <div className="filter-result"> {items.length} Graphic Cards</div>
      <div className="filter-sort">
        Order
        <select value={items.price} onChange={sortItems}>
			<option> Default </option>
          <option>Lowest</option>
          <option>Highest</option>
        </select>
      </div>
    </div>
  );
}

// Object.keys(this.props)
//    .sort((a, b) => ( this.props[a].price - this.props[b].price ))
//    .map( this._renderOffers)