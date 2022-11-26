import React, { useState } from "react";
import Logo from "../assets/img/new.png";
import Image from "next/image";
import {
  faComputer,
  faDumbbell,
  faFileLines,
  faHouse,
  faWallet,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ButtonItem from "../components/ButtonItem";
import ChangeSideSelecion from "../components/ChangeSelection";

function SideBar() {
  const [change, setChange] = useState("dashboard");
  const sideButtons = [
    {
      title: "Dashboard",
      reference: "dashboard",
      icon: faHouse,
    },
    {
      title: "Cursos",
      reference: "course",
      icon: faComputer,
    },
    {
      title: "Practica",
      reference: "pratice",
      icon: faDumbbell,
    },
    {
      title: "Proyectos",
      reference: "projects",
      icon: faFileLines,
    },
  ];

  return (
    <div className="h-screen">
      <nav className="h-full w-[16.5rem] bg-card fixed top-0 left-0 px-[10px] py-[14px] z-50">
        <header className="relative">
          <div className="flex items-center gap-5">
            <div className="relative flex items-center w-full h-[5rem] justify-center gap-4 text-white">
              <Image src={Logo} alt="logo" layout="fill" />
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-between px-3 mt-5 font-bold font-abel h-4/5">
          <div>
            <ul>
              {sideButtons.map((buttonItem, index) => (
                <li key={`sideButton-${index}`}>
                  <ButtonItem
                    title={buttonItem.title}
                    references={buttonItem.reference}
                    selected={change}
                    icon={buttonItem.icon}
                    index={index + 1}
                    onClick={() => setChange(buttonItem.reference)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ButtonItem
              title={"Pagos"}
              references="pay"
              selected={change}
              icon={faWallet}
              index={1}
              onClick={() => setChange("pay")}
            />
            <ButtonItem
              title={"Oscar Marin"}
              references="user"
              selected={change}
              icon={faUser}
              index={2}
              onClick={() => setChange("user")}
            />
          </div>
        </div>
      </nav>
      <section className="left-[16.5rem] flex items-start h-screen w-[calc(100%-16.5rem)] relative bg-white">
        <div className="w-full h-screen bg-card">
          <ChangeSideSelecion onChange={change} />
        </div>
      </section>
    </div>
  );
}

export default SideBar;
