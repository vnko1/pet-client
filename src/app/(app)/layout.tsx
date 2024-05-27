import { ReactNode } from "react";
import { Header } from "./ui";

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
