import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      console.log(productsCopy); // 9 items present
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      console.log(productsCopy); // 0 items present instead of 3 items
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
    </div>
  );
};

export default RelatedProducts;
