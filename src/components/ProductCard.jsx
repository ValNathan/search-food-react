import React from "react";

export default function ProductCard({ productData }) {
  function getProductAllergens(product) {
    if (Object.keys(product).length !== 0) {
      if (product.allergens === "") {
        return <p>Aucun allergène n'est associé à ce produit</p>;
      } else {
        let splittedAllergens = product.allergens.split(",");
        return (
          <ul className="allergens">
            {splittedAllergens.map((elem, key) => {
              return <li key={key}>{elem}</li>;
            })}
          </ul>
        );
      }
    }
  }

  return (
    <div className="product-card">
      <h2 className="product-name">{productData.product_name}</h2>
      <div>
        <img
          className="product-img"
          src={productData.image_url}
          alt="product"
        />
      </div>
      <div>
        <h3>Allergènes : </h3>
        {productData && getProductAllergens(productData)}
      </div>
    </div>
  );
}
