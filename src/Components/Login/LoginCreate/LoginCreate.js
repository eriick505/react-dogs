import React from "react";

import Head from "../../Head/Head";
import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import Error from "../../Helper/Error/Error";

import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";

import { USER_POST } from "../../../api";
import { UserContext } from "../../../Contexts/UserContext";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Cadastre-se" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadatrar</Button>
        )}
        {error && <Error error={error} />}
      </form>
    </section>
  );
}

export default LoginCreate;
