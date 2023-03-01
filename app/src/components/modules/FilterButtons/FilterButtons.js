import Hatchback from "@/components/icons/Hatchback";
import Sedan from "@/components/icons/Sedan";
import Sport from "@/components/icons/Sport";
import Suv from "@/components/icons/Suv";
import Link from "next/link";
import React from "react";
import styles from "./FilterButtons.module.css";

const FilterButtons = () => {
  return (
    <div className={styles.filterWrapper}>
      <Link href="/cars/filter/sedan">
        <span>
          <Sedan />
        </span>
        <span>Sedan</span>
      </Link>
      <Link href="/cars/filter/suv">
        <span>
          <Suv />
        </span>
        <span>SUV</span>
      </Link>
      <Link href="/cars/filter/hatchback">
        <span>
          <Hatchback />
        </span>
        <span>Hatchback</span>
      </Link>
      <Link href="/cars/filter/sport">
        <span>
          <Sport />
        </span>
        <span>Sport</span>
      </Link>
    </div>
  );
};

export default FilterButtons;
