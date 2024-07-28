import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const useMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const isOpen = isActive;
  const openMenu = () => setIsActive(true);
  const closeMenu = () => setIsActive(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return { isOpen, openMenu, closeMenu };
};
