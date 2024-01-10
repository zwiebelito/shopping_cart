import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrease, getTotal, increase, remove} from "../../redux/slices/cartSlice";
import styles from './Cart.module.css'

const Cart = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    console.log(cart, totalQuantity, totalPrice)

    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <h2 className={styles.heading}>Cart - {cart.length} items</h2>
                <div className={styles.stripe}></div>
                {cart.length === 0 ? <div className={styles.empty}>The cart is empty</div> :
                    cart.map((product) => {
                    const {id, title, price, img, quantity} = product;
                    return (
                        <div key={id} className={styles.product}>
                            <img src={img} alt={title}/>
                            <div className={styles.info}>
                                <div className={styles.container1}>
                                    <h2 className={styles.descr2}>{title}</h2>
                                    <button className={styles.delete} onClick={() => dispatch(remove(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                            <path d="M11.0474 1.52576C11.2349 1.52576 11.4224 1.71326 11.4224
                                            1.90076V2.65076C11.4224 2.86169 11.2349 3.02576 11.0474 3.02576H1.29736C1.08643
                                            3.02576 0.922363 2.86169 0.922363 2.65076V1.90076C0.922363 1.71326 1.08643 1.52576
                                            .29736 1.52576H4.10986L4.3208 1.10388C4.41455 0.916382 4.60205 0.775757 4.81299
                                            0.775757H7.5083C7.71924 0.775757 7.90674 0.916382 8.00049 1.10388L8.23486
                                            1.52576H11.0474ZM2.16455 11.7211L1.67236 3.77576H10.6724L10.1567 11.7211C10.1333
                                            12.3304 9.64111 12.7758 9.03174 12.7758H3.28955C2.68018 12.7758 2.18799 12.3304 2.16455 11.7211Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className={styles.container2}>
                                    <div className={styles.wrap1}>
                                        <button disabled={quantity === 1} onClick={() => dispatch(decrease(id))} className={styles.buttons}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 12 3" fill="none">
                                                <path d="M10.3322 0.120789C10.7306 0.120789 11.0822 0.472351 11.0822
                                                0.870789V1.62079C11.0822 2.04266 10.7306 2.37079 10.3322
                                                2.37079H1.33215C0.910278 2.37079 0.582153 2.04266 0.582153 1.62079V0.870789C0.582153 0.472351
                                                0.910278 0.120789 1.33215 0.120789H10.3322Z" fill="white"/>
                                            </svg>
                                        </button>
                                        <p className={styles.quantity}>Quantity: {quantity}</p>
                                        <button onClick={() => dispatch(increase(id))} className={styles.buttons}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                                                <path d="M4.28663 2.87379H6.55463V4.15779H4.28663V6.41379H3.00263V4.15779H0.734628V2.87379H3.00263V0.593788H4.28663V2.87379Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={styles.wrap2}>{price}</div>
                                </div>
                                <div className={[styles.stripe, styles.invisible].join(' ')}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.summary}>
                <h2 className={styles.heading}>Summary</h2>
                <div className={styles.stripe}></div>
                <div className={styles.wrapper}>
                    <div className={styles.total}>
                        <p className={styles.descr1}>Total Quantity</p>
                        <p className={styles.descr1}>{totalQuantity}</p>
                    </div>
                    <div className={styles.total}>
                        <p className={styles.descr2}>Total Amount</p>
                        <p className={styles.descr2}>{totalPrice}</p>
                    </div>
                    <button className={styles.checkout}>GO TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export {Cart};