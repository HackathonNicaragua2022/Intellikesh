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
      <h1 className="mb-4 text-5xl font-semibold text-center text-white">
        ¡Bienvenido!
      </h1>

      <form
        className="flex flex-col items-center justify-center w-10/12 p-16 bg-white xl:w-1/2 h-4/6 rounded-3xl"
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
        <Button
          className="self-center w-2/5 p-4 mt-12 text-xs border-4 border-midnight"
          formAction="submit"
        >
          Iniciar Sesión
        </Button>
      </form>
    </div>
  );
};

export default Registro;
