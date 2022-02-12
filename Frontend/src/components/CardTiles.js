import { Link } from "react-router-dom";
import React from "react";
import "./CardTile.css";
import greenPharmacy from "../green_pharmacy.jpg";
export default function CardTiles({ pharmacy }) {
  return (
    <>
      <div className="card-container">
        <div className="color-card">
          <Link to="/store" className="pharmacy-link">
            <div className="pharmacy-details pharmacy-name">
              {pharmacy.placeName}
            </div>
            <img src={greenPharmacy} alt="Pharmacy Logo" />
          </Link>
        </div>

        <div className="detail-card">
          <span className="pharmacy-details">
            <span className="pharmacy-details-distance">
              {pharmacy.distance}
            </span>{" "}
            meters away
          </span>
          <span className="pharmacy-details">{pharmacy.placeAddress}</span>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/store" className="pharmacy-link">
              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "80px",
                  fontSize: "16px",
                  padding: "10px",
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
