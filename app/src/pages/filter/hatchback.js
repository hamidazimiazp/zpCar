import Button from "@/components/modules/Button/Button";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import styles from "./filter.module.css";
import { useRouter } from "next/router";
import getCars from "@/data/carsData";
import CarList from "@/components/templates/carList/carList";

const Suv = () => {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  const data = getCars().filter((car) => car.category === "hatchback");

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
      {data && <CarList data={data} />}
    </div>
  );
};

export default Suv;
