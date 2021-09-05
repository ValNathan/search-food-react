import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Details() {
  let params = useParams();
  const [productData, setProductData] = useState({});

  function getProduct() {
    let url = `https://fr.openfoodfacts.org/api/v0/product/${params.id}.json`;
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProductData(res.product);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);

  console.log(productData);

  return (
    <div className="container">
      <ProductCard productData={productData} />
    </div>
  );
}
