import React, { useState } from "react";
import Logo from "../assets/img/logo-1.png";
import Image from "next/image";
import {
  faComputer,
  faDumbbell,
  faFileLines,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from "../components/Dashboard";

function SideBar() {
  const [change, setChange] = useState("dashboard");

  return (
    <div className="h-screen bg-black">
      <link
        href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
        rel="stylesheet"
      />
      <nav className="h-full w-[18.5rem] rounded-lg bg-midnight fixed top-0 left-0 px-[10px] py-[14px] z-50">
        <header className="relative">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center gap-4 text-white">
              <Image src={Logo} alt="logo" />
              <span className="text-[1.2rem] font-semibold">
                SpanishCodeCamp
              </span>
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-between px-3 mt-5 font-bold font-abel h-4/5">
          <div>
            <ul>
              <li>
                <button
                  className={`flex items-center w-full h-[3.5rem] ${
                    change === "dashboard"
                      ? "bg-gradient-to-r from-pink to-purple text-white"
                      : "text-gray "
                  } mt-4 p-2 duration-300 hover:bg-highnight hover:text-white text-[1.1rem] hover:text-[1.3rem] rounded-lg`}
                  onClick={() => setChange("dashboard")}
                >
                  <FontAwesomeIcon
                    className="text-[1.5rem] pr-[2rem] flex items-center justify-center"
                    icon={faHouse}
                  />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center w-full h-[3.5rem] ${
                    change === "cursos"
                      ? "bg-gradient-to-r from-pink to-purple text-white"
                      : "text-gray "
                  } mt-4 p-2 duration-300 hover:bg-highnight hover:text-white text-[1.1rem] hover:text-[1.3rem] rounded-lg`}
                  onClick={() => setChange("cursos")}
                >
                  <FontAwesomeIcon
                    className="text-[1.5rem] pr-[2rem] flex items-center justify-center"
                    icon={faComputer}
                  />
                  <span>Cursos</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center w-full h-[3.5rem] ${
                    change === "practica"
                      ? "bg-gradient-to-r from-pink to-purple text-white"
                      : "text-gray "
                  } mt-4 p-2 duration-300 hover:bg-highnight hover:text-white text-[1.1rem] hover:text-[1.3rem] rounded-lg`}
                  onClick={() => setChange("practica")}
                >
                  <FontAwesomeIcon
                    className="text-[1.5rem] pr-[2rem] flex items-center justify-center"
                    icon={faDumbbell}
                  />
                  <span>Practica</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center w-full h-[3.5rem] ${
                    change === "proyectos"
                      ? "bg-gradient-to-r from-pink to-purple text-white"
                      : "text-gray "
                  } mt-4 p-2 duration-300 hover:bg-highnight hover:text-white text-[1.1rem] hover:text-[1.3rem] rounded-lg`}
                  onClick={() => setChange("proyectos")}
                >
                  <FontAwesomeIcon
                    className="text-[1.5rem] pr-[2rem] flex items-center justify-center"
                    icon={faFileLines}
                  />
                  <span>Proyectos</span>
                </button>
              </li>
            </ul>
          </div>
          <div>
            <button
              className={`flex items-center w-full h-[3.5rem] ${
                change === "pagos"
                  ? "bg-gradient-to-r from-pink to-purple text-white"
                  : "text-gray "
              } mt-4 p-2 duration-300 hover:bg-highnight hover:text-white text-[1.1rem] hover:text-[1.3rem] rounded-lg`}
              onClick={() => setChange("pagos")}
            >
              <i className="bx bx-wallet text-[1.5rem] pr-[2rem] flex items-center justify-center" />
              <span>Pagos</span>
            </button>
            <button className="flex items-center h-[3.5rem] w-full mt-4 p-2 text-gray duration-300 hover:bg-highnight hover:text-white rounded-lg">
              <i className="bx bx-user text-[1.5rem] pr-[2rem] flex items-center justify-center" />
              <span className="text-[1.1rem]">Oscar Marin</span>
            </button>
          </div>
        </div>
      </nav>
      <section className="left-[18.5rem] flex items-start h-screen w-[calc(100%-18.5rem)] relative bg-white">
        <div className="w-full h-screen bg-gradient-to-r from-pink to-purple">
          <Dashboard />
        </div>
      </section>
    </div>
  );
}

export default SideBar;
