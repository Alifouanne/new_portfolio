"use client";
import { LazyMotion, domAnimation } from "framer-motion";
import React from "react";
type lazyProps = {
  children: React.ReactNode;
};
const LazyMotions = ({ children }: lazyProps) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default LazyMotions;
