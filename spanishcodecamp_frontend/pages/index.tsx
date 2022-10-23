import type { NextPage } from "next";
import HomePage from "./homePage";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <NavBar />
      <HomePage />
    </div>
  );
};

export default Home;
