import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";


export const Navbar = ({onClose}) => {
	const { store, actions } = useContext(Context)
	const totalAmount = store.cart.reduce((total, meal) => total + meal.price * meal.quantity, 0);

	return (
		<>
			<header className='nav-bar header'>
				<h1>Menu</h1>
				<div className='cart-container'>
					<button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Cart {store.cart.length}
						<i class="fa-solid fa-cart-shopping"></i>
					</button>
					
						<div className='dropdown-menu' aria-labelledby="dropdownMenuButton1">
							{store.cart.length === 0 ? <li className="dropdown-item empty-cart-message">Your cart is empty</li>
								: (
									<ul className='cart-items'>
										{store.cart.map((meal, id) => {
											return <li className="dropdown-item cart-item" key={id}>
												<div className="cart-item-details">
													<h5 className='name'>{meal.name}</h5>
													<div className="cart-item-summary">
														<span className='quantity'>x {meal.quantity}</span>
														<span className='price'>${meal.price.toFixed(2)}</span>
													</div>


												</div>
												{/* <div className="cart-item-actions">
													<button className="btn" onClick={(e) => actions.removeFromCart(meal.id)}>−</button>
													<button className="btn" onClick={(e) => actions.addToCart(meal)}>+</button>
												</div> */}

											</li>

										})}
										<li className="dropdown-item total-amount">
											<span>Total:</span>
											<span>${totalAmount.toFixed(2)}</span>
										</li>
										<li className="dropdown-item cart-actions">
											<button className="butt-close" onClick={onClose}>Close</button>
											<Link to = '/order-summary'>
												<button className="butt-order">Order</button>
											</Link>
										</li>
									</ul>)}
						</div>



					
				</div>



			</header>
			<div className='main-image'>
				<img src='https://www.amc.info/fileadmin/_processed_/1/c/csm_Article_15_Header_wok_Asian_spices_2e5ac9f99e.jpg' />
			</div>
		</>

	);
};
