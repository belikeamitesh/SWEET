import React from 'react';
import styles from '../pages/MedicalStore/Store.module.css';
export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <div className={styles.product}>
            <img className={styles.small} src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    );
}
