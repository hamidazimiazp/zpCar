import React, { useEffect, useState } from "react";
import getCars from "@/data/carsData";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(getCars());
  }, []);

  return (
    <div>
      {cars &&
        cars.map((car) => {
          return <p key={car.id}>{car.name}</p>;
        })}
    </div>
  );
};

export default CarList;
