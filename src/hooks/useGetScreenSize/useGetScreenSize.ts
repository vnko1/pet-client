"use client";
import { useEffect, useState } from "react";

export const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useState(8);

  useEffect(() => {
    if (typeof window !== "undefined") setScreenSize(window.innerWidth);
  }, []);

  return [screenSize];
};
