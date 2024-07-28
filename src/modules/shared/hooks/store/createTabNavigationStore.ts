import { create } from "zustand";

interface UseTabNavigation {
  tab: Record<string, number>;
  changeTab: (tab: number) => void;
}

export const createTabNavigationStore = (
  page: string,
  initialTabId: number
) => {
  return create<UseTabNavigation>((set) => ({
    tab: { [page]: initialTabId },
    changeTab: (newTab: number) =>
      set((state) => ({
        tab: { ...state.tab, [page]: newTab },
      })),
  }));
};
