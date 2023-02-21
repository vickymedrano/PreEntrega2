import React from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
//import { BrowserRouter } from "react-router-dom";

const App = () => {
  const user = "Usuario 1";

  return (
    <>
      {/* //<BrowserRouter> */}
      
        <Navbar name={user} />
        <ItemListContainer />

      {/* </BrowserRouter> */}
    </>
  );
};

export default App;




