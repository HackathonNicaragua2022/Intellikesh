import React from "react";
import CardItem from "./CardItem";
import {
  faHouse,
  faDumbbell,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import StatusBar from "./StatusBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center px-10">
      <header className="text-white text-[2rem] flex justify-between items-center py-4 w-full">
        <span>Hola, Oscar Marin!</span>
        <div className="flex gap-4">
          <CardItem title="Cursos" amount={8} icon={faHouse} />
          <CardItem title="Practicas" amount={5} icon={faDumbbell} />
          <CardItem title="Proyectos" amount={12} icon={faFileLines} />
        </div>
      </header>
      <main className=" w-[100%] h-[600px] bg-assent p-8 rounded-xl">
        <StatusBar />
      </main>
    </div>
  );
};

export default Dashboard;
