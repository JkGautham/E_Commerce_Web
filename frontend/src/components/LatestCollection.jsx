import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const { products } = useContext(ShopContext);
  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, []);
  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          natusneque iusto reprehenderit
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((latestProduct, index) => (
          <ProductItem
            key={index}
            id={latestProduct._id}
            image={latestProduct.image}
            name={latestProduct.name}
            price={latestProduct.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
