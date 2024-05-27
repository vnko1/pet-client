import { FC } from "react";

import { UIButton, Modal } from "@/components";

import Buttons from "../Buttons/Buttons";

import { IMenu } from "./Menu.type";
import styles from "./Menu.module.scss";

const Menu: FC<IMenu> = ({ links, pathName, user, ...props }) => {
  return (
    <Modal
      {...props}
      backdropClassNames={styles["modal"]}
      classNames={styles["modal__body"]}
      transitionClassNames={styles["active"]}
      enableSwipeUpToScreen={1279}
      enableSwipe
    >
      <div className={styles["menu__auth"]}>
        <Buttons user={user} />
      </div>
      <nav className={styles["menu-nav"]}>
        <ul className={styles["menu-nav__links"]}>
          {links.map((link, index) => (
            <li key={index} className="text-center">
              <UIButton
                href={link.href}
                onClick={() => props.setActive(false)}
                variant="text"
                size="large"
                isCurrent={link.href === pathName}
              >
                {link.label}
              </UIButton>
            </li>
          ))}
        </ul>
      </nav>
    </Modal>
  );
};

export default Menu;
