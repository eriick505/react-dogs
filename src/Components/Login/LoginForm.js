import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const isFieldsFullFill = username.validate() && password.validate();

    if (isFieldsFullFill) {
      userLogin(username.value, password.value);
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
