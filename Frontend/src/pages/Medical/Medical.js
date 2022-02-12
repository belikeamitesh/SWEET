import React from 'react'
import styles from "./Medical.module.css";
import GoogleMap from '../../components/GoogleMap';

function Medical() {
  return (
    <div>
    <div className={styles.header}>Medical</div>
    <GoogleMap id="mapContainer"/>
    </div>
  )
}

export default Medical;