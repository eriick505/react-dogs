import React from "react";

import Head from "../../Head/Head";
import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import Error from "../../Helper/Error/Error";

import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";

import { PASSWORD_LOST } from "../../../api";

function LoginPasswordLost() {
  const login = useForm();

  const { loading, error, request, data } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
}

export default LoginPasswordLost;
