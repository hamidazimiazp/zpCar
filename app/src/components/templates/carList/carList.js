import React, { useEffect, useState } from "react";
import getCars from "@/data/carsData";
import Card from "@/components/modules/CarCard/Card";
import styles from "./carList.module.css";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(getCars());
  }, []);

  return (
    <div className={styles.carList}>
      {cars &&
        cars.map((car) => {
          return <Card key={car.id} data={car} />;
        })}
    </div>
  );
};

export default CarList;
