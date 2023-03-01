import CarDetail from "@/components/templates/carDetail/CarDetail";
import getCars from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

const CarDetails = () => {
  const router = useRouter();

  const { carId } = router.query;
  const data = getCars()[carId - 1] || {};
  return <CarDetail data={data} />;
};

export default CarDetails;
