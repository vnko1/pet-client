"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";

import { Icon, Logo, UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";
import { useModal } from "@/hooks";

import { Buttons, Menu } from "..";

import styles from "./Header.module.scss";

const links = [
  { label: "News", href: LinksEnum.NEWS },
  { label: "Find pet", href: LinksEnum.NOTICES_SELL },
  { label: "Our friends", href: LinksEnum.FRIENDS },
];

const Header: FC = () => {
  const modalProps = useModal(undefined, true);
  const pathName = usePathname();

  const toggleModal = () => {
    if (!modalProps.active) return modalProps.setActive(true);
    modalProps.close();
  };
  return (
    <header className={styles["header"]}>
      <div className={`container ${styles["header__wrapper"]}`}>
        <nav className={styles["nav"]}>
          <Logo />
          <ul className={styles["nav__links"]}>
            {links.map((link, index) => (
              <li key={index}>
                <UIButton
                  href={link.href}
                  variant="text"
                  size="medium"
                  isCurrent={link.href === pathName}
                >
                  {link.label}
                </UIButton>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles["btn-wrapper"]}>
          <div className={styles["auth"]}>
            <Buttons user={null} />
          </div>
          <div className={styles["menu"]}>
            <UIButton variant="text" onClick={toggleModal}>
              <Icon
                icon={modalProps.active ? IconEnum.CROSS : IconEnum.MENU}
                size={24}
                className={styles["icon"]}
              />
            </UIButton>
          </div>
        </div>
      </div>
      <Menu {...modalProps} links={links} pathName={pathName} user={null} />
    </header>
  );
};

export default Header;
