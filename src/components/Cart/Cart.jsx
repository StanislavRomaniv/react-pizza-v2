import React from 'react';
import { Link } from "react-router-dom";
import { pizza } from '../../data/pizza';
import CartItem from './CartItem';
import './styles.scss';

const Cart = (props) => {
    const isEmpty = false;
    const count = 3, price = 1500;

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" className="logo__img"/>
                    <div className="logo__title">
                        <h5 className="logo__title-top">REACT PIZZA</h5>
                        <p className="logo__title-bottom">The best pizza in the world</p>
                    </div>
                </div>
            </div>

            <div className="cart__wrapper">
            {
                isEmpty ? 
                    <div className="cart">
                        <div className="cart__header">
                            <h3 className="cart__header-text">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                    Cart
                            </h3>
                            <button className="cart__button clear">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Clear cart</span>
                            </button>
                        </div>
                        <div className="cart__list">
                            {
                                [0, 1, 2].map((item, i) => (
                                    <CartItem key={i} src={pizza[i].src} name={pizza[i].name} type={pizza[i].types[0]} size={pizza[i].sizes[0]} count={1} totalPrice={pizza[i].price} />
                                ))
                            }
                        </div>
                        <div className="cart__total">
                            <div className="cart__total-count">Total pizzas: <b>{count} pcs.</b></div>
                            <div className="cart__total-price">Order price: <b>{price} UAH</b></div>
                        </div>
                        <div className="cart__buttons">
                            <Link to={"/"} style={{ textDecoration: 'none' }}>
                                <button className="cart__button stroked"><i></i><span>Go back</span></button>
                            </Link>
                            <button className="cart__button pay">Pay now</button>
                        </div>
                    </div>
                :
                    <div className="cart__empty">
                        <h3 className="cart__empty-header">Cart is empty <img src="/images/sad_face.png" alt="sad face"/></h3>
                        <p className="cart__empty-text">Most likely, you haven't order anything yet</p>
                        <p className="cart__empty-text">To order some pizza, please, go to the main page</p>
                        <img src="/images/empty_cart.png" alt="empty cart" className="cart__empty-img"/>
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <button className="cart__empty-button">Go back</button>
                        </Link>
                    </div>
            }
            </div>
        </>
    );
}

export default Cart;