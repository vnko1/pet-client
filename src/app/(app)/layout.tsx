import { ReactNode } from "react";
import { HeaderWrapper } from "./ui";

export const dynamic = "force-dynamic";
export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderWrapper />
      {children}
    </>
  );
}
