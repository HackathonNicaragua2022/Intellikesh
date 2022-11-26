import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { API_URL } from "../utils/consts";
import { generateAxiosConfig } from "../utils/functions";
import { useEffect } from "react";
import Button from "../components/Button";

const Course = () => {
  const [currentCourse, setCurrentCourse] = useState<any>({});
  const [code, setCode] = useState<any>("");
  const [result, setResult] = useState<any>("");

  useEffect(() => {
    const axiosConfig = generateAxiosConfig(window);
    axios
      .get(API_URL + "courses/2", axiosConfig)
      .then((res) => {
        setCurrentCourse(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const compileCode = () => {
    eval(code) ?? "";
    setResult(eval(code));
  };

  return (
    <div className="flex flex-col h-screen">
      <section className="flex flex-col h-screen text-center md:flex-row">
        <article className="h-screen w-full md:w-[30%] bg-complement text-white">
          <br />
          <span className="text-[2rem] font-bold">Uso del alert</span>
          <br />
          <div className="text-[1.3rem] text-center px-10">
            <span>
              El alert es una alerta en pantalla que muestra una cadena de texto
            </span>
            <br />
            <br />
            <span>Cambiar el mensaje del alert con el mensaje que desees</span>
          </div>
        </article>
        <div className="flex flex-col w-full md:w-[70%] h-screen">
          <Editor
            height="70%"
            width="100%"
            theme="vs-dark"
            defaultLanguage="javascript"
            onChange={(data) => setCode(data)}
          />
          <article className="bg-assent h-[30%] w-full">
            <div className="flex items-center justify-between w-full p-4">
              <span className="text-white text-[1.3rem]">{`Resultado: -`}</span>
              <Button onClick={compileCode} size="text-[1.2rem]" type="fill">
                Compilar
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Course;
