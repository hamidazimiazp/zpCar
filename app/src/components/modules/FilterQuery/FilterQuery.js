import React, { useState } from "react";
import styles from "./FilterQuery.module.css";
import Link from "next/link";

const FilterQuery = () => {
  const [data, setData] = useState({
    min: "",
    max: "",
  });

  const onchangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.queryWrapper}>
      <div>
        <input
          type="text"
          name="min"
          placeholder="min"
          value={data.min}
          onChange={onchangeHandler}
        />
        <input
          type="text"
          name="max"
          placeholder="max"
          value={data.max}
          onChange={onchangeHandler}
        />
      </div>
      <div>
        <Link href={`/filter/${data.min}/${data.max}`}>
          <button>Go</button>
        </Link>
      </div>
    </div>
  );
};

export default FilterQuery;
