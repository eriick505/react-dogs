import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as DogsLogo } from '../../Assets/dogs.svg';
import { UserContext } from '../../Contexts/UserContext';

function Header() {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <DogsLogo />
        </Link>
        {data ? (
          <Link className={styles.login} to="conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
