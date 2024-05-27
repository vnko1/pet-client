import type { Metadata } from "next";

import { manrope, inter, poppins } from "@/fonts";

import "../styles/globals.scss";
import { Header } from "./ui";
import { getParsedSession } from "@/lib";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Your Pet ",
  description: "Your pet app - applications about pets",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userName, isLoggedIn } = await getParsedSession();
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${poppins.variable}`}
      >
        <Header userName={userName} isLoggedIn={isLoggedIn} />
        {children}
      </body>
    </html>
  );
}
