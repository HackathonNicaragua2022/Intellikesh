import type { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import HomePage from "./homePage";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <HomePage />
    </div>
  );
};

export default Home;
