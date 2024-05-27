"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./auth.module.scss";

function AuthLayout({ children }: { children: ReactNode }) {
  const isRegister = usePathname() === "/register";

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className={styles["auth"]}>
            <h1 className={styles["auth__title"]}>
              {isRegister ? "Registration" : "Login"}
            </h1>
            {children}
            <p className={styles["auth__text"]}>
              Already have an account?{" "}
              <Link
                href={isRegister ? "/login" : "/register"}
                className={styles["link"]}
              >
                {isRegister ? "Login" : "Register"}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthLayout;
