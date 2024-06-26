import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/summary.css";


export const OrderSummary = props => {
    const { store, actions } = useContext(Context);
    const [comment, setComment] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const totalPrice = store.cart.reduce((total, meal) => total + meal.price * meal.quantity, 0);
    const navigate = useNavigate();
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };
    const handleFinishOrder = () => {
        if (!paymentMethod) {
            alert('Please choose your payment method!')
            return;
        };
        if (paymentMethod === 'cash') {
            actions.clearCart();
            navigate('/order-success')
        }
        else { alert('Redirecting to bank payment gateway...'); }


    }
    return (
        <>
            <Navbar />
            <div className="order-summary">
                <h2>Order Summary</h2>
                <ul>
                    {store.cart.map((meal, index) => (
                        <li key={index}>
                            <div>{meal.name}</div>
                            <div>x {meal.quantity}</div>
                            <div className="butt">
                                <button className='trash-icon' onClick={(e) => actions.removeItem(meal.id)}><i class="fa-solid fa-trash" ></i></button>
                                <button className="butt1" onClick={(e) => actions.removeFromCart(meal.id)}>−</button>
                                <button className="butt1" onClick={(e) => actions.addToCart(meal)}>+</button>
                            </div>
                            
                            <div>${(meal.price * meal.quantity).toFixed(2)}</div>
                            
                        </li>
                    ))}
                </ul>
                <div className="total">
                    <h5>Total Price: </h5>
                    <h5>${totalPrice.toFixed(2)}</h5>
                </div>
                <div className="comments">
                    <label htmlFor="comments">Comments:</label>
                    <textarea id="comments" value={comment} onChange={handleCommentChange}></textarea>
                </div>

                <div className="payment-method">
                    <label htmlFor="payment">Payment Method:</label>
                    {/* <select id="payment" value={paymentMethod} onChange={handlePaymentMethodChange}>
                        <option value="">Select Payment Method</option>
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="cash">Pay at Cashier</option>
                    </select> */}
                    <div className="payment-icons">
                        <button className={paymentMethod === 'credit' ? 'selected' : ''} onClick={() => handlePaymentMethodChange('credit')}>
                        <i class="fa-solid fa-credit-card"></i> Credit Card
                        </button>
                        <button className={paymentMethod === 'debit' ? 'selected' : ''} onClick={() => handlePaymentMethodChange('debit')}>
                        <i class="fa-solid fa-building-columns"></i> Debit Card
                        </button>
                        <button className={paymentMethod === 'paypal' ? 'selected' : ''} onClick={() => handlePaymentMethodChange('paypal')}>
                        <i class="fa-brands fa-paypal"></i> PayPal
                        </button>
                        <button className={paymentMethod === 'cash' ? 'selected' : ''} onClick={() => handlePaymentMethodChange('cash')}>
                        <i class="fa-solid fa-money-bill"></i> Pay at Cashier
                        </button>
                    </div>
                </div>
                <div className='order-finish'>
                    <button onClick={actions.clearCart} className='button1'>Clear Order</button>
                    <button className='button1' onClick={handleFinishOrder}>Finish order</button>
                </div>
            </div>
            <Footer />
        </>
    );

};

OrderSummary.propTypes = {
    match: PropTypes.object
};
