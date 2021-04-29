import React from "react";

import Head from "../../Head/Head";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import Error from "../../Helper/Error/Error";

import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";

import { PASSWORD_RESET } from "../../../api";
import { useNavigate } from "react-router";

function LoginPasswordReset() {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");

  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);

      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resete a Senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
}

export default LoginPasswordReset;
