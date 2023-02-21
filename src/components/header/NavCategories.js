import React from "react";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "TODAS" },
    { id: 2, name: "Hogar" },
    { id: 3, name: "Jardín" },
    { id: 4, name: "Ropa" },
  ];

  return (
    <nav>
      {categories.map((category) => {
        return (
          <a key={category.id} style={styles.categorias} href="">
            {category.name}
          </a>
        );
      })}
    </nav>
  );
};

export const styles = {
  categorias: {
    margin: 10,
    color: "red",
   },
};

export default NavCategories;
