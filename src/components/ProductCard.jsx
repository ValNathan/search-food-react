import React from "react";

export default function ProductCard({ productData }) {
  function getProductAllergens(product) {
    if (product.allergens !== "") {
      let splittedAllergens = product.allergens.split(",");
      return (
        <ul className="product-allergens">
          {splittedAllergens.map((elem, key) => {
            return <li key={key}>{elem}</li>;
          })}
        </ul>
      );
    }
  }

  return (
    <div className="product-card">
      <h2 className="product-name">{productData.product_name}</h2>
      <img
        className="product-img"
        src={productData.image_url}
        alt="photo produit"
      />
      {productData.allergens ? (
        productData.allergens !== "" ? (
          getProductAllergens(productData)
        ) : (
          <p>Aucun allergène n'est associé à ce produit</p>
        )
      ) : null}
    </div>
  );
}
