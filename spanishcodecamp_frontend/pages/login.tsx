import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import Button from "../components/Button";
import Input from "../components/Input";
import { userDataAtom } from "../state/atoms";
import { apiErrorsSelector } from "../state/selectors";
import { API_URL } from "../utils/consts";
import { formDataAsDict, generateAxiosConfig } from "../utils/functions";

const Registro: NextPage = () => {
  const setUserData = useSetRecoilState(userDataAtom);
  const setApiErrors = useSetRecoilState(apiErrorsSelector);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const axiosConfig = generateAxiosConfig(window);

    const formData = formDataAsDict(event);

    axios
      .post(API_URL + "login/", formData, axiosConfig)
      .then((res) => {
        setUserData(res.data.user);
        router.push("sideBar");
        window.localStorage.setItem("token", `Bearer ${res.data.token}`);
      })
      .catch((err) => {
        console.log(err.response.data);
        setApiErrors(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-midnight">
      <div className="fixed z-0 w-[3000px] rotate-[150deg] bg-gradient-to-r from-purple to-pink h-[1000px]" />
      <h1 className="relative mb-4 text-5xl font-semibold text-center text-white z-1">
        ¡Bienvenido!
      </h1>

      <form
        className="relative flex flex-col items-center justify-center w-10/12 bg-white sm:p-16 xl:w-1/2 h-4/6 rounded-3xl z-1"
        onSubmit={handleSubmit}
      >
        <div className="w-4/5">
          <Input
            name="username"
            descriptiveText="Nombre de usuario"
            placeholder="Ingrese el Usuario"
          />
          <div className="h-12" />
          <Input
            name="password"
            descriptiveText="Contraseña"
            type="password"
            placeholder="Ingrese la Contraseña"
          />
        </div>
        <br />
        <Button size="text-[1.6rem]" type="light">
          Iniciar Sesión
        </Button>
      </form>
    </div>
  );
};

export default Registro;
