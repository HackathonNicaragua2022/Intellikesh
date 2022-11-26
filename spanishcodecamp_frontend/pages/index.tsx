import type { NextPage } from "next";
import HomePage from "./homePage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ElevateAppBar from "../components/ElevationBar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;
