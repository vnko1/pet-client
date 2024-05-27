import { FC } from "react";

import { Sponsor } from "..";

import { SponsorsProps } from "./Sponsors.type";
import styles from "./Sponsors.module.scss";

const Sponsors: FC<SponsorsProps> = ({ classNames, sponsors }) => {
  return (
    <ul className={`${styles["sponsors"]} ${classNames}`}>
      {sponsors.map((sponsor) => {
        return (
          <li className={styles["sponsors__item"]} key={sponsor._id}>
            <Sponsor {...sponsor} />
          </li>
        );
      })}
    </ul>
  );
};

export default Sponsors;
