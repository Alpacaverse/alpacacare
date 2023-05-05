import { create } from "zustand";

export const usePremiumUserStore = create((set) => ({
  isPremiumUser: false,
  setIsPremiumUser: (isPremiumUser) => set({ isPremiumUser: isPremiumUser }),
}));

