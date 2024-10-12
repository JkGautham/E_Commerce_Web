import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState();
  const { products } = useContext(ShopContext);
  useEffect(() => {
    setLatestProducts(products.slice(0, 6));
  }, []);
  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gary-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          natusneque iusto reprehenderit
        </p>
      </div>
    </div>
  );
};

export default LatestCollection;
