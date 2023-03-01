import React, { useEffect, useRef } from "react";
import styles from "./CarDetail.module.css";
import {
  MdLocationOn,
  MdAttachMoney,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import Button from "@/components/modules/Button/Button";
import { useRouter } from "next/router";

const CarDetail = ({ data }) => {
  const { name, model, year, distance, location, price, image, description } =
    data;

  const detailRef = useRef();

  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  useEffect(() => {
    detailRef.current.parentElement.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.detailWraper} ref={detailRef}>
      <div className={styles.backButton}>
        <Button
          text="Back"
          color="#fff"
          bgColor="#262525"
          clicked={backHandler}
          icon={<MdKeyboardArrowLeft color="#fff" size={18} />}
        />
      </div>
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
        <div>${price && price.toLocaleString()}</div>
      </div>
      <Button
        text="Buy"
        color="#fff"
        bgColor="#111"
        clicked={() => {}}
        icon={<MdAttachMoney color="#fff" size={18} />}
      />
    </div>
  );
};

export default CarDetail;
