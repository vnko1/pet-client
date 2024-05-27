import { ReactNode } from "react";
import { HeaderWrapper } from "./ui";

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderWrapper />
      {children}
    </>
  );
}

export const dynamic = "force-dynamic";
