import { useHeaderContaext } from "@/context/HeaderIndecatorProvider";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { links } from "./data";
type stateType = (typeof links)[number]["name"];

export const useHeadreActive = (
  section: stateType,
  amount: number | "some" | "all" | undefined = 0.5,
) => {
  const { setActive, timeClick } = useHeaderContaext();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: amount });

  useEffect(() => {
    if (isInView && Date.now() - timeClick > 1000) {
      setActive(section);
    }
  }, [isInView, setActive]);
  return { ref };
};
