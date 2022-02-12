import { Link } from "react-router-dom";
import React from "react";
import styles from "./CardTile1.module.css";
import hack from "../../hack.png";
export default function CardTiles({ pharmacy }) {
  return (
    <>
      <div className={styles.card_container1}>
        <div className={styles.color_card1}>
          <Link to="/" className={styles.pharmacy_link1}>
            <span className={styles.pharmacy_name1}>{pharmacy.placeName}</span>
            <img className={styles.img} src={hack} alt="hackathon" />
          </Link>
        </div>

        <div className={styles.detail_card1}>
          <span className={styles.pharmacy_details1}>
            <span className={styles.title}>Event Date :</span>
            <span className={styles.pharmacy_details_distance1}>
              {pharmacy.date}
            </span>{" "}
          </span>

          <div className={styles.pharmacy_details1}>
            {" "}
            <span className={styles.title}>Host :</span>
            {pharmacy.placeAddress}
          </div>
          <div className={styles.pharmacy_details1}>
            {" "}
            <span className={styles.title}>Time for Event :</span>
            {pharmacy.time}
          </div>
          <span className={styles.pharmacy_details1}>
            {" "}
            <span className={styles.title}>Topic for Event :</span>
            {pharmacy.topic}
          </span>
          <span className={styles.pharmacy_details1}>
            {" "}
            <span className={styles.title}>Event Description :</span>
            {pharmacy.desc}
          </span>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Link to="/" className="pharmacy-link1">
              <button
                style={{
                  backgroundColor: "#F34F51",
                  color: "white",
                  fontWeight: "500",
                  padding: "10px",
                  borderRadius: "80px",
                }}
                className={styles.custBtn}
              >
                Register for Event
              </button>
            </Link>
            <Link to="/" className="pharmacy-link1">
              <button
                style={{
                  backgroundColor: "#F34F51",
                  color: "white",
                  fontWeight: "500",
                  padding: "10px",
                  borderRadius: "80px",
                }}
                className={styles.custBtn}
              >
                Notify Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
