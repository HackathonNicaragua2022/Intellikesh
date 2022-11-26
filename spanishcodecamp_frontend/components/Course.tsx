import React from "react";
import CourseCard from "./CourseCard";
import One from "assets/img/Python.png";

const Course = () => {
  const courses = [
    {
      image: One,
      level: "10 niveles restantes",
      label: "Python Avanzado",
      descripton:
        "La programación funcional es otro enfoque popular para el desarrollo de software, el código se organiza en...",
    },
    {
      image: One,
      level: "10 niveles restantes",
      label: "Python Avanzado",
      descripton:
        "La programación funcional es otro enfoque popular para el desarrollo de software, el código se organiza en...",
    },
    {
      image: One,
      level: "10 niveles restantes",
      label: "Python Avanzado",
      descripton:
        "La programación funcional es otro enfoque popular para el desarrollo de software, el código se organiza en...",
    },
    {
      image: One,
      level: "10 niveles restantes",
      label: "Python Avanzado",
      descripton:
        "La programación funcional es otro enfoque popular para el desarrollo de software, el código se organiza en...",
    },
  ];

  return (
    <div className="px-10">
      <header className="text-white text-[2rem] flex justify-between items-center h-[160px] py-4 w-full">
        <span className="text-textColor">Información de Cursos</span>
      </header>
      <section className="grid grid-cols-3 gap-8 w-[100%] h-[600px] bg-assent p-[2.5rem] rounded-xl">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            label={course.label}
            level={course.level}
            description={course.descripton}
            image={course.image}
          />
        ))}
      </section>
    </div>
  );
};

export default Course;
