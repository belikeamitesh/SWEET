import { Link } from 'react-router-dom';
import React from 'react';
import styles from './CardTile.module.css';
import greenPharmacy from '../green_pharmacy.jpg';
export default function CardTiles({ pharmacy }) {
    return (
        <>
            <div className={styles.card_container}>
                <div className={styles.color_card}>
                    <Link to="/store" className={styles.pharmacy_link}>
                        <div className={styles.pharmacy_name}>{pharmacy.placeName}</div>
                        <img src={greenPharmacy} alt="Pharmacy Logo" />
                    </Link>
                </div>

                <div className={styles.detail_card}>
                    <span className={styles.pharmacy_details}>
                        <span className={styles.pharmacy_details_distance}>{pharmacy.distance}</span> meters away
                    </span>
                    <span className={styles.pharmacy_details}>{pharmacy.placeAddress}</span>
                    <div
                        style={{
                            marginTop: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Link to="/store" className={styles.pharmacy_link}>
                            <button
                                style={{
                                    backgroundColor: 'orange',
                                    color: 'white',
                                    fontWeight: '500',
                                    borderRadius: '80px',
                                    fontSize: '16px',
                                    padding: '10px',
                                }}
                                className="custBtn"
                            >
                                Browse store
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
