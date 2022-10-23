import axios from "axios";
import { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import Button from "../components/Button";
import Input from "../components/Input";
import { apiErrorsAtom, userDataAtom } from "../state/atoms";
import { API_URL } from "../utils/consts";
import { formDataAsDict, generateAxiosConfig } from "../utils/functions";
import GrandientButton from "../components/GradientButton";

const Registro: NextPage = () => {
  const setUserData = useSetRecoilState(userDataAtom);
  const setApiErrors = useSetRecoilState(apiErrorsAtom);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const axiosConfig = generateAxiosConfig(window);

    const formData = formDataAsDict(event);

    axios
      .post(API_URL + "register/", formData, axiosConfig)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => setApiErrors(err));
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-midnight">
      <div className="fixed z-0 w-[3000px] rotate-[150deg] bg-gradient-to-r from-purple to-pink h-[1000px]" />
      <h1 className="relative mb-4 text-5xl font-semibold text-center text-white z-1">
        ¡Bienvenido!
      </h1>

      <form
        className="relative flex flex-col items-center justify-center w-10/12 p-16 bg-white xl:w-1/2 h-4/6 rounded-3xl z-1"
        onSubmit={handleSubmit}
      >
        <div className="w-4/5">
          <Input
            name="username"
            descriptiveText="Nombre de usuario"
            placeholder="Escriba su nombre de usuario"
          />
          <div className="h-12" />
          <Input
            name="password"
            descriptiveText="Contraseña"
            type="password"
            placeholder="Escriba su contraseña"
          />
        </div>
        <GrandientButton formAction="submit">Iniciar Sesión</GrandientButton>
      </form>
    </div>
  );
};

export default Registro;
