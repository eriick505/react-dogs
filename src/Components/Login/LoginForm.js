import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';

function LoginForm() {
  const username = useForm();
  const password = useForm();
  console.log(username);
  console.log(password);

  function handleSubmit(event) {
    event.preventDefault();
    const isFieldsFullFill = username.validate() && password.validate();

    if (isFieldsFullFill) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(json => {
          console.log(json);
          return json;
        });
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
