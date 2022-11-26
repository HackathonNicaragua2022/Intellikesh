import axios from "axios";
import { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import Input from "../components/Input";
import { apiErrorsAtom, userDataAtom } from "../state/atoms";
import { API_URL } from "../utils/consts";
import { formDataAsDict, generateAxiosConfig } from "../utils/functions";
import Button from "../components/Button";
import { useRouter } from "next/router";

const Registro: NextPage = () => {
  const setUserData = useSetRecoilState(userDataAtom);
  const setApiErrors = useSetRecoilState(apiErrorsAtom);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const axiosConfig = generateAxiosConfig(window);

    const formData = formDataAsDict(event);

    axios
      .post(API_URL + "register/", formData, axiosConfig)
      .then((res) => {
        setUserData(res.data);
        router.push("login/");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        setApiErrors(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-midnight">
      <div className="fixed z-0 w-[3000px] rotate-[150deg] bg-gradient-to-r from-purple to-pink h-[1000px]" />
      <h1 className="relative mb-4 text-[2rem] sm:text-5xl font-extrabold tracking-wider text-center text-white z-1">
        Crea tu cuenta
      </h1>
      <form
        className="relative flex flex-col gap-12 px-4 py-8 mx-2 mb-4 overflow-auto bg-white sm:px-16 sm:grid sm:grid-cols-2 z-1 rounded-xl sm:rounded-3xl"
        onSubmit={handleSubmit}
      >
        <Input
          name="first_name"
          descriptiveText="Nombres"
          placeholder="Escriba su nombre"
        />
        <Input
          name="last_name"
          descriptiveText="Apellidos"
          placeholder="Escriba su apellido"
        />
        <Input
          name="password1"
          descriptiveText="Contraseña"
          placeholder="Escriba su contraseña"
          type="password"
        />
        <Input
          name="password2"
          descriptiveText="Confirmar"
          placeholder="Confirme su contraseña"
          type="password"
        />

        <Input
          name="email"
          descriptiveText="Correo electrónico"
          placeholder="Escriba su correo"
        />
        <Input
          name="username"
          descriptiveText="Nombre de usuario"
          placeholder="Escriba su usuario"
        />
        <div className="flex justify-center w-full col-span-2">
          <Button size="text-[1.7rem]" type="light">
            Registrarse
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
