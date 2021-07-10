import React, { Component } from "react";




export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
		name:"",
		email:"",
		address:"",
		showCheckout: false };
  }

handleInput = (e) => {
	this.setState({[e.target.name]: e.target.value});
}

createOrder = (e) => {
	e.preventDefault();
	const order = {
		name: this.state.name,
		email: this.state.email,
		address: this.state.address,
		cartsItems: this.props.cartsItems
	};
	this.props.createOrder(order)
}

  render() {
    const { cartsItems } = this.props;
    return (
      <div className="cart-container">
        {cartsItems.length === 0 ? (
          <div className="cart cart-header"> Cart is empty </div>
        ) : (
          <div className="">You have {cartsItems.length} in the cart </div>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartsItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image_url} alt={item.name}></img>
                  </div>
                  <div>{item.name}</div>
                  <div>${item.price}</div>
                  <div>Total: {() => this.props.total(item.price)}</div>
                  <button
                    className="cartbutton"
                    onClick={() => this.props.removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <div className="checkout">
                <div className="total">
                  {/* {cartsItems.reduce((a, c) => a + (c.price*c.count, 0))} */}
                </div>
                {/* <button>Save to Wish List</button> */}
                <button
                  onClick={() => {
                    this.setState({showCheckout: true});
                  }}
                >
                  Proceed
                </button>
              </div>
              {this.state.showCheckout && (
                <div className="cart">
                  <form onSubmit={this.createOrder}></form>
                  <ul className="form-container">
                    <li>
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        name="address"
                        type="text"
                        required
                        onChange={this.handleInput}
                      ></input>
                    </li>
					<li>
						<button type="submit">Checkout</button>
					</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
