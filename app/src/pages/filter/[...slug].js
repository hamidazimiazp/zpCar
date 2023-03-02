import Button from "@/components/modules/Button/Button";
import CarList from "@/components/templates/carList/carList";
import getCars from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import styles from "./filter.module.css";

const Filter = () => {
  const router = useRouter();

  const [min, max] = router.query.slug || [];
  const data = getCars().filter((car) => car.price >= min && car.price <= max);

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
      {data && <CarList data={data} />}
    </div>
  );
};

export default Filter;
