"use client";
import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";
type stateType = (typeof links)[number]["name"];
type contextType = {
  active: stateType;
  setActive: React.Dispatch<React.SetStateAction<stateType>>;
  timeClick: number;
  setTimeClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveHeadercontext = createContext<contextType | null>(null);
const HeaderIndecatorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [active, setActive] = useState<stateType>("Home");
  const [timeClick, setTimeClick] = useState<number>(0);
  return (
    <ActiveHeadercontext.Provider
      value={{ active, setActive, timeClick, setTimeClick }}
    >
      {children}
    </ActiveHeadercontext.Provider>
  );
};
export const useHeaderContaext = () => {
  const context = useContext(ActiveHeadercontext);
  if (context === null) {
    throw new Error(
      "useHeaderContext must be used within a HeaderIndecatorProvider",
    );
  }
  return context;
};
export default HeaderIndecatorProvider;
