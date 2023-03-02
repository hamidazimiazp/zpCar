import CarList from "@/components/templates/carList/carList";
import getCars from "@/data/carsData";
import React, { useState, useEffect } from "react";

const index = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(getCars());
  }, []);

  return (
    <div>
      <CarList data={cars} />
    </div>
  );
};

export default index;
