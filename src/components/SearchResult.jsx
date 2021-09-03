import React from "react";
import { Link } from "react-router-dom";

export default function SearchResult({ result }) {
  function getAllergens(product) {
    let splittedAllergens = product.allergens.split(",");
    return (
      <ul className="allergens">
        {splittedAllergens.map((elem, key) => {
          return <li key={key}>{elem}</li>;
        })}
      </ul>
    );
  }

  return (
    <div className="search-result">
      <img src={result.image_url} alt="product" className="product-img" />
      <h2 className="product-name">{result.product_name}</h2>
      {result && getAllergens(result)}
      <Link to={`/product/${result.id}`}>Voir la fiche produit</Link>
    </div>
  );
}
