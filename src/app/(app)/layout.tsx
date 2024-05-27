import { ReactNode } from "react";
import { Header } from "./ui";
import { getParsedSession } from "@/lib";

export default async function AppLayout({ children }: { children: ReactNode }) {
  const { userName, isLoggedIn } = await getParsedSession();
  return (
    <>
      <Header userName={userName} isLoggedIn={isLoggedIn} />
      {children}
    </>
  );
}
