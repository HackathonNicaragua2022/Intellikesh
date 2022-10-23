import axios from "axios";
import { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import Input from "../components/Input";
import GrandientButton from "../components/GradientButton";
import { apiErrorsAtom, userDataAtom } from "../state/atoms";
import { API_URL } from "../utils/consts";
import { formDataAsDict, generateAxiosConfig } from "../utils/functions";

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
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-midnight">
      <div className="fixed z-0 w-[3000px] rotate-[150deg] bg-gradient-to-r from-purple to-pink h-[1000px]" />
      <h1 className="relative mb-4 text-6xl font-extrabold tracking-wider text-center text-white z-1">
        Crea tu cuenta
      </h1>
      <form
        className="relative grid grid-cols-2 gap-12 px-16 py-8 bg-white z-1 xl:w-1/2 h-5/6 rounded-3xl"
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
          <GrandientButton formAction="submit">Registrarse</GrandientButton>
        </div>
      </form>
    </div>
  );
};

export default Registro;
