import { useEffect } from "react";

const Initial = ({ cleanCategories }) => {
  useEffect(() => {
    cleanCategories(["Iniciar Busqueda"]);
  }, []);

  return <div></div>;
};

export default Initial;
