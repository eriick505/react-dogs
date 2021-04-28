import React from "react";

import Feed from "../Feed/Feed";
import Head from "../Head/Head";

function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Home" description="Projeto de rede social para cachorros" />
      <Feed />
    </section>
  );
}

export default Home;
