import { atom } from "recoil";
import { localStorageEffect } from "./effects";

export const userDataAtom = atom({
  key: "userDataAtom",
  default: undefined,
});

export const apiErrorsAtom = atom<Record<string, any>>({
  key: "apiErrorsAtom",
  default: {},
});

export const successStringAtom = atom({
  key: "successStringAtom",
  default: "",
});

const userTokenAtom = atom<string>({
  key: "userTokenAtom",
  default: "",
  effects: [localStorageEffect("current_user")],
});
