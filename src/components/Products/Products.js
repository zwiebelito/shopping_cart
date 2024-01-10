import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Products.module.css'
import {add} from "../../redux/slices/cartSlice";

const Products = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    return (
        <div className={styles.products}>
            {products.map((product) => {
                const {id, title, price, img} = product;
                return (
                    <div key={id} className={styles.wrap}>
                        <img src={img} alt={title}/>
                        <div className={styles.info}>
                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.price}>{price}</p>
                            <button onClick={() => dispatch(add(product))} className={styles.button}>ADD TO CART</button>
                        </div>
                    </div>
                )
                }
            )}
        </div>
    );
};

export {Products};