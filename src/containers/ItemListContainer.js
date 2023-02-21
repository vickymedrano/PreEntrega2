import React, { useEffect, useState } from "react";
import Itemcount from "../components/ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    getProducts();
  }, []);

  const onAdd = (count) => {
    console.log(`el usuario selecciono ${count} `);
  };

  return (
    <>
      <Itemcount stock={5} onAdd={onAdd} />

      {!error ? (
        <>
          {products.length ? (
            <ItemDetailContainer products={products} />
          ) : (
            <h1>Cargando...</h1>
          )}
        </>
      ) : (
        <h1>Hubo un error</h1>
      )}
    </>
  );
};

export default ItemListContainer;
