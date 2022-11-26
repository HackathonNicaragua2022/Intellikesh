import { atom } from "recoil";

export const userDataAtom = atom<User>({
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
