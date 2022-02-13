import React from 'react';
import Product from './Product';
import styles from '../pages/MedicalStore/Store.module.css';
export default function Main(props) {
    const { products, onAdd } = props;
    return (
        <main className={styles.col - 2}>
            <h2>Available Medicines</h2>
            <div className={styles.row}>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
}
