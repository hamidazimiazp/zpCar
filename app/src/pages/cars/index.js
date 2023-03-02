import Button from "@/components/modules/Button/Button";
import CarList from "@/components/templates/carList/carList";
import getCars from "@/data/carsData";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import styles from "./cars.module.css";

const index = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(getCars());
  }, []);

  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div>
      <div className={styles.backButton}>
        <Button
          text="Back"
          color="#fff"
          bgColor="#262525"
          clicked={backHandler}
          icon={<MdKeyboardArrowLeft color="#fff" size={18} />}
        />
      </div>

      <CarList data={cars} />
    </div>
  );
};

export default index;
