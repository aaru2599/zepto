import { useEffect, useState } from "react";
import Card from "../Molecule/Card";

const CardLayout1 = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetch("/utilities/Products.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data.products));
  }, []);
  console.log("productsData", productsData);
  return (
    <div className="flex justify-center flex-wrap gap-5 ">
      <Card productsData={productsData} />
    </div>
  );
};

export default CardLayout1;
