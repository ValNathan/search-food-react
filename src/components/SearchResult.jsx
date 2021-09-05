import React from "react";
import { Link } from "react-router-dom";

export default function SearchResult({ result }) {
  function getAllergens(product) {
    let splittedAllergens = product.allergens.split(",");
    if (product.allergens === "") {
      return <p>Aucun allergène n'est associé à ce produit</p>;
    }
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
      <div className="img-product">
        <img src={result.image_url} alt="product" className="product-img" />
      </div>
      <div className="product-infos">
        <h2 className="product-name">{result.product_name}</h2>
        <h3>Allergènes :</h3>
        {result && getAllergens(result)}
      </div>
      <Link to={`/product/${result.id}`}>Voir la fiche produit</Link>
    </div>
  );
}
