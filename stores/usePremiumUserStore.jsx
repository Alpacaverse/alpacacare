import { create } from "zustand";

export const usePremiumUserStore = create((set) => ({
  isPremiumUser: false,
  trialUsed: false,
  setIsPremiumUser: (isPremiumUser) => set({ isPremiumUser: isPremiumUser }),
  setTrialUsed: (trialUsed) => set({ trialUsed: trialUsed }),
}));
