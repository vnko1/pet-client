import { FC } from "react";
import Image from "next/image";

import { WorkDays } from "@/types";

import { SponsorProps } from "./Sponsor.type";
import styles from "./Sponsor.module.scss";

function getDefaultTime(workDays: WorkDays[] | null) {
  if (workDays && workDays.length > 0) {
    const firstWorkDay = workDays[0];
    const from = firstWorkDay.from ? firstWorkDay.from : "11:00";
    const to = firstWorkDay.to ? firstWorkDay.to : "16:00";
    return `${from} - ${to}`;
  } else {
    return "Day and night";
  }
}

const Sponsor: FC<SponsorProps> = ({
  classNames,
  title,
  url,
  address,
  addressUrl,
  imageUrl,
  phone,
  email,
  workDays,
}) => {
  const defaultTime = getDefaultTime(workDays);
  return (
    <div className={`${styles["card"]} ${classNames}`}>
      <a
        className={styles["card__link"]}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <div className={styles["card__box"]}>
        <div className={styles["card__image"]}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Friends logo"
              width={146}
              height={104}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
            />
          ) : null}
        </div>
        <div className={styles["card__content"]}>
          <div className={styles["dropdown"]}>
            <div>
              <p className={styles["text"]}>
                <strong>Time:</strong>
                <br /> {defaultTime}
              </p>
            </div>
          </div>
          <p className={styles["text"]}>
            <strong>Address:</strong>
            <br />
            {address ? (
              <a href={addressUrl} target="_blank" rel="noreferrer">
                {address}
              </a>
            ) : (
              "website only"
            )}
          </p>
          <p className={styles["text"]}>
            <strong>Email:</strong> <br />
            {email ? <a href={`mailto:${email}`}>{email}</a> : "website only"}
          </p>
          <p className={styles["text"]}>
            <strong>Phone:</strong>
            {phone ? <a href={`tel:${phone}`}>{phone}</a> : "website only"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
