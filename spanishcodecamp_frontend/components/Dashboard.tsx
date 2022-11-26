import React from "react";
import CardItem from "./CardItem";
import {
  faComputer,
  faDumbbell,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import StatusBar from "./StatusBar";
import CourseCard from "./CourseCard";
import One from "assets/img/Python.png";
import Two from "assets/img/JavaScript.png";
import Three from "assets/img/type.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center px-10">
      <header className="text-white text-[2rem] flex justify-between items-center py-4 w-full">
        <span>Hola, Oscar Marin!</span>
        <div className="flex gap-4">
          <CardItem title="Cursos" amount={8} icon={faComputer} />
          <CardItem title="Practicas" amount={5} icon={faDumbbell} />
          <CardItem title="Proyectos" amount={12} icon={faFileLines} />
        </div>
      </header>
      <main className="flex flex-col justify-between w-[100%] h-[600px] bg-assent p-[2.5rem] rounded-xl">
        <StatusBar
          courseName="Python Profesional"
          level="10 Niveles restantes"
          image={One}
        />
        <div className="flex justify-between">
          <CourseCard
            image={One}
            level="10 niveles restantes"
            label="Python Avanzado"
            description=" La programación funcional es otro enfoque popular para el desarrollo
            de software, el código se organiza en..."
          />
          <CourseCard
            image={Two}
            level="20 niveles restantes"
            label="JavaScript Avanzado"
            description=" La programación funcional es otro enfoque popular para el desarrollo
            de software, el código se organiza en..."
          />
          <CourseCard
            image={Three}
            level="5 niveles restantes"
            label="TypeScript Avanzado"
            description=" La programación funcional es otro enfoque popular para el desarrollo
            de software, el código se organiza en..."
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
