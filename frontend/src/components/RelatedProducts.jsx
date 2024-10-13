import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";

const RelatedProducts = (category, subCategory) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
    }
  }, [products]);

  return <div>RelatedProducts</div>;
};

export default RelatedProducts;
