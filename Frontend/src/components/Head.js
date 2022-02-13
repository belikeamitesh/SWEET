import React from 'react';
import styles from '../pages/MedicalStore/Store.module.css';
export default function Head(props) {
    return (
        <header className={styles.row}>
            <div>
                <h1>SWEET: Medical Shopping</h1>
            </div>
            <div>
                <a href="/cart">Cart {props.countCartItems ? <button className={styles.badge}>{props.countCartItems}</button> : ''}</a>{' '}
            </div>
        </header>
    );
}
