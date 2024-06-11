import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";
import "../../styles/menu.css";
import { AddForm } from "../component/AddForm";

export const Menu = (props) => {
	const { store, actions } = useContext(Context);
	const starters = store.menu.filter(item => item.category === 'starter');
	const mains = store.menu.filter(item => item.category === 'main');
	const desserts = store.menu.filter(item => item.category === 'dessert');
	const drinks = store.menu.filter(item => item.category === 'drink');
	useEffect(() => {
		actions.getMenu()
	}, [])


	return (
		<>
			<Navbar />
			<section className='meals'>
				<div className='card'>
					<h2>Starters</h2>
					<ul>{starters.map((meal) => (
						<li className='meal'>

							<div>
								<h5>{meal.name}</h5>
								<div className='description'>{meal.description}</div>
								<div className='price'>${meal.price}</div>
							</div>
							<img src={meal.image} alt={meal.name} className='meal-image' />
							<div>
								<AddForm
									id={meal.id}
									name={meal.name}
									price={meal.price}
								/>
							</div>
						</li>
					))}</ul>
					<h2>Main course</h2>
					<ul>{mains.map((meal) => (
						<li className='meal'>
							<div>
								<h5>{meal.name}</h5>
								<div className='description'>{meal.description}</div>
								<div className='price'>${meal.price}</div>
							</div>
							<img src={meal.image} alt={meal.name} className='meal-image' />
							<div>
								<AddForm
									id={meal.id}
									name={meal.name}
									price={meal.price}
								/>
							</div>
						</li>
					))}</ul>
					<h2>Desserts</h2>
					<ul>{desserts.map((meal) => (
						<li className='meal'>
							<div>
								<h5>{meal.name}</h5>
								<div className='description'>{meal.description}</div>
								<div className='price'>${meal.price}</div>
							</div>
							<img src={meal.image} alt={meal.name} className='meal-image' />
							<div>
								<AddForm
									id={meal.id}
									name={meal.name}
									price={meal.price}
								/>
							</div>
						</li>
					))}</ul>
					<h2>Drinks</h2>
					<ul>{drinks.map((meal) => (
						<li className='meal'>
							<div>
								<h5>{meal.name}</h5>
								{/* <div className='description'>{meal.description}</div> */}
								<div className='price'>${meal.price}</div>
							</div>
							<div>
								<AddForm
									id={meal.id}
									name={meal.name}
									price={meal.price}
								/>
							</div>
						</li>
					))}</ul>
				</div>
			</section>
			<Footer />
		</>

	);
};
