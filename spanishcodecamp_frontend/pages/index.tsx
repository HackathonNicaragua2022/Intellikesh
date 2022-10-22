import type { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import { testAtom } from "../state/atoms";
const Home: NextPage = () => {
  const setTest = useSetRecoilState(testAtom);
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-6xl">HELLO WORLD</h1>
    </div>
  );
};

export default Home;
