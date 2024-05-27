import React, { ChangeEvent, FC, useEffect, useState } from "react";
import cn from "classnames";

import { Icon, CheckBox } from "@/components";
import { IconEnum } from "@/types";

import { FilterPopupProps } from "./FilterPopup.type";
import styles from "./FilterPopup.module.scss";

const genderCheckBoxes = [
  {
    id: "female",
    value: "female",
    label: "female",
    checked: false,
  },
  {
    id: "male",
    value: "male",
    label: "male",
    checked: false,
  },
];

const FilterPopup: FC<FilterPopupProps> = ({
  selectedGenderCheckBoxes,
  setSelectedGenderCheckBoxes,
}) => {
  const [genderIsActive, setGenderIsActive] = useState(false);

  useEffect(() => {
    return () => {
      setGenderIsActive(false);
    };
  }, []);

  const onHandleChangeGender = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked)
      return setSelectedGenderCheckBoxes((state) => [...state, value]);
    setSelectedGenderCheckBoxes((state) => state.filter((e) => e !== value));
  };

  const genderButtonClassNames = cn(
    styles["filter__button"],
    styles["gender__button"],
    { [styles["active"]]: genderIsActive }
  );

  const genderContentClassNames = cn(styles["filter__content"], {});

  return (
    <>
      <h2 className={styles["title"]}>Filters</h2>

      <div className={`${styles["filter"]} ${styles["gender"]}`}>
        <button
          className={genderButtonClassNames}
          onClick={() => setGenderIsActive(!genderIsActive)}
        >
          <Icon icon={IconEnum.CHEVRON} size={24} />
          By gender
        </button>
        {genderIsActive ? (
          <ul className={genderContentClassNames}>
            {genderCheckBoxes.map((checkBox) => (
              <li key={checkBox.value}>
                <CheckBox
                  {...checkBox}
                  name="sex"
                  onChange={onHandleChangeGender}
                  checked={selectedGenderCheckBoxes.includes(checkBox.id)}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default FilterPopup;
