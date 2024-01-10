import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getTotal} from "../../redux/slices/cartSlice";

const Navbar = () => {
    const { cart, totalQuantity } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch]);

    return (
        <div className={styles.wrap}>
            <div className={styles.info}>Navbar</div>
            <nav className={styles.nav}>
                <NavLink className={styles.first} to={'/products'}>All products</NavLink>
                <NavLink className={styles.second} to={'/cart'}>CART({totalQuantity})</NavLink>
            </nav>
        </div>
    );
};

export {Navbar};