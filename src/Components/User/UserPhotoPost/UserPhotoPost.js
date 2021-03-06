import React from "react";

import Head from "../../Head/Head";
import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import Error from "../../Helper/Error/Error";

import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";
import { useNavigate } from "react-router";

import { PHOTO_POST } from "../../../api";

import styles from "./UserPhotoPost.module.css";

function UserPhotoPost() {
  const [img, setImg] = React.useState({});

  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
    if (data) console.log(data);
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste Sua Foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
}

export default UserPhotoPost;
