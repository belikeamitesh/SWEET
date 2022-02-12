import React, { useState } from 'react'
import styles from "./Medical.module.css";
import GoogleMap from '../../components/GoogleMap';

function Medical() {
  // taken from: https://www.youtube.com/watch?v=UGSN6o29fPo
  const [showMedicalStores, setShowMedicalStores]=useState(false);
  const [showHealthFacilities, setShowHealthFacilities]=useState(false);
  return (
    <div className={styles.container}>
    <div className={styles.header}>Medical</div>
    {(showHealthFacilities||showMedicalStores)?<GoogleMap/>:null}
    <div class={styles.flexContainer}>
      {!showMedicalStores? <button className={styles.button} onClick={()=>{setShowMedicalStores(true); setShowHealthFacilities(false);}}>Show Stores</button>: null}
      {showMedicalStores?<button className={styles.button} onClick={()=>{setShowMedicalStores(false); setShowHealthFacilities(false);}}>Hide Stores</button>: null}
      {!showHealthFacilities? <button className={styles.button} onClick={()=>{setShowHealthFacilities(true); setShowMedicalStores(false);}}>Show Health Facilities</button>: null}
      {showHealthFacilities? <button className={styles.button} onClick={()=>{setShowMedicalStores(false); setShowHealthFacilities(false);}}>Hide Health Facilities</button>: null}
      <button className={styles.button} onClick="showMedicalStores()">Speak to a Professional</button>
    </div>
    </div>
  )
}

export default Medical;