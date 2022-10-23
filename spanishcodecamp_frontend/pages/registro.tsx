import axios from "axios";
import { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import Button from "../components/Button";
import Input from "../components/Input";
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
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-midnight">
      <h1 className="mb-4 text-6xl font-extrabold tracking-wider text-center text-white">
        Crea tu cuenta
      </h1>

      <form
        className="grid w-10/12 grid-cols-2 gap-12 px-16 py-8 bg-white xl:w-1/2 h-4/6 rounded-3xl"
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
          <Button
            className="self-center w-3/5 p-3 text-xs border-4 border-midnight"
            formAction="submit"
          >
            Registrarse
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Registro;