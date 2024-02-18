import { useEffect, useState } from "react";
import Card from "../Molecule/Card";
import CardProto from "../Molecule/Card copy";

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
      <CardProto productsData={productsData} />
    </div>
  );
};

export default CardLayout1;
