import React from "react";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";

const Navbar = ({ name }) => {
  return (
    <header style={styles.container}>
      <a style={styles.imagenes} href="">
        <img style={styles.imagenes} src="./images/maquetado.jpg" alt="logo" />
      </a>
      <h1>Medrano's Shopp - Bienvenido {name}</h1>

      <NavCategories />

      <CartWidget />
    </header>
  );
};

export default Navbar;
