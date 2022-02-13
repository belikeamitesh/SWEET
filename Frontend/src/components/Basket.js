import React from 'react';
import styles from './Basket.module.css';
export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className={styles.row}>
                        <div className={styles.col - 2}>{item.name}</div>
                        <div className={styles.col - 2}>
                            <button onClick={() => onRemove(item)} className={styles.remove}>
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className={styles.add}>
                                +
                            </button>
                        </div>

                        <div className={styles.text_right}>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className={styles.row}>
                            <div className={styles.col - 2}>Items Price</div>
                            <div className={styles.text_right}>${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col - 2}>Tax Price</div>
                            <div className={styles.text_right}>${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col - 2}>Shipping Price</div>
                            <div className={styles.text_right}>${shippingPrice.toFixed(2)}</div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col - 2}>
                                <strong>Total Price</strong>
                            </div>
                            <div className={styles.text_right}>
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.row}>
                            <button onClick={() => alert('Thanks, We will be right there!')}>Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}
