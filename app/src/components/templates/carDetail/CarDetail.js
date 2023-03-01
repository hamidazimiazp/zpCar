import React from "react";
import styles from "./CarDetail.module.css";
import { MdLocationOn, MdAttachMoney } from "react-icons/md";

const CarDetail = ({ data }) => {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    price,
    image,
    description,
  } = data;

  return (
    <div className={styles.detailWraper}>
      <img src={image} alt={name} />
      <div className={styles.name}>{name}</div>
      <ul className={styles.infoList}>
        <li>
          <span>Name</span>
          <span>{name}</span>
        </li>
        <li>
          <span>Model</span>
          <span>{model}</span>
        </li>
        <li>
          <span>First Registration</span>
          <span>{year}</span>
        </li>
        <li>
          <span>Kms Driven</span>
          <span>{distance}</span>
        </li>
      </ul>
      <div className={styles.locationCard}>
        <div>
          <MdLocationOn size={18} color="#fff" />
          Location
        </div>
        <div>{location}</div>
      </div>
      <div className={styles.description}>
        <div>Description</div>
        <p>{description}</p>
      </div>
      <div className={styles.price}>
        <div>
          <MdAttachMoney size={18} color="#fff" />
          Price
        </div>
        <div>${price.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default CarDetail;
