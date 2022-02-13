import React from 'react';
import CardTiles from '../../components/CardTiles';
import styles from './Shops.module.css';

export default function Shops() {
    const pharmacies = [
        { placeName: 'Green Pharmacy', placeAddress: 'Lal Nagar, New city, Patna - 80001, Bihar', distance: '26' },
        { placeName: 'Alfred Medical Store', placeAddress: 'Digha Ghat road, Near xyz, Patna-80001, Bihar', distance: '187' },
        { placeName: 'Medica Store', placeAddress: 'Kanakarbagh, Patna - 80001, Bihar', distance: '34' },
        { placeName: 'Omkar Medicals', placeAddress: 'Bongora Nagar, Near xyz, Patna-80001, Bihar', distance: '211' },
    ];
    return (
        <div className="home-container">
            <h1 className={styles.title}>Nearby Local Medicine Shops</h1>
            {pharmacies && pharmacies.map((pharmacy) => <CardTiles key={pharmacy.distance} pharmacy={pharmacy} />)}
        </div>
    );
}
