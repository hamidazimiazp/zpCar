import FilterButtons from "@/components/modules/FilterButtons/FilterButtons";
import CarList from "@/components/templates/carList/carList";
import getCars from "@/data/carsData";
import React from "react";

const index = () => {
  const selectedData = getCars().slice(0, 4);
  return (
    <div>
      <FilterButtons />
      <CarList data={selectedData} />
    </div>
  );
};

export default index;
