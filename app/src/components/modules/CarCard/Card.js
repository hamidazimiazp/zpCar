import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

const Card = ({ data }) => {
  const { id, name, model, year, distance, location, price, image } = data;

  return (
    <Link href={`/cars/${id}`} className={styles.wrapper}>
      <div className={styles.image}>
        <img src={image} />
        <div className={styles.details}>
          <div className={styles.name}>
            {name} {model}
          </div>
          <div className={styles.yearKm}>
            <span>{year}</span>
            <span>.</span>
            <span>{distance}KM</span>
          </div>
          <div className={styles.row}>
            <div className={styles.priceTag}>${price}</div>
            <div className={styles.location}>
              <MdLocationOn size={18} color="#fff" />
              {location}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
