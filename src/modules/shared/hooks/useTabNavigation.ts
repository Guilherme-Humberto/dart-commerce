import { useRef } from "react";
import { createTabNavigationStore } from "./store/createTabNavigationStore";

export const useTabNavigation = (page: string, initialTabId: number) => {
  const store = useRef<any>(null);

  if (!store.current) {
    store.current = createTabNavigationStore(page, initialTabId);
  }

  return store.current();
};
