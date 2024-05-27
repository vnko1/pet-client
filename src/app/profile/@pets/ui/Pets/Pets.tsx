import React, { FC } from "react";

import Pet from "../Pet/Pet";
import styles from "./Pets.module.scss";
import { PetsProps } from "./Pets.type";

const Pets: FC<PetsProps> = ({ pets }) => {
  return (
    <ul className={styles["pets"]}>
      {pets.map((pet) => (
        <li key={pet._id}>
          <Pet {...pet} />
        </li>
      ))}
    </ul>
  );
};

export default Pets;
