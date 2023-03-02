import FilterButtons from "@/components/modules/FilterButtons/FilterButtons";
import FilterQuery from "@/components/modules/FilterQuery/FilterQuery";
import CarList from "@/components/templates/carList/carList";
import getCars from "@/data/carsData";
import Link from "next/link";
import React from "react";
import { MdEast } from "react-icons/md";

const index = () => {
  const selectedData = getCars().slice(0, 4);
  return (
    <div>
      <FilterQuery />
      <FilterButtons />
      <p
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
          gap: 10,
        }}
      >
        <Link
          href="/cars"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
            gap: 10,
          }}
        >
          <span>Show List Of All Cars</span>
          <MdEast color="#fff" size={18} />
        </Link>
      </p>
      <CarList data={selectedData} />
    </div>
  );
};

export default index;
