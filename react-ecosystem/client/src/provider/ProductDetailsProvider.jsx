import { useState } from "react";
import { ProductDetailsContext } from "../context";

const ProductDetailsProvider = ({ children }) => {
  const [productId, setProductId] = useState(1);

  return (
    <ProductDetailsContext.Provider value={{ productId, setProductId }}>
      {children}
    </ProductDetailsContext.Provider>
  );
};

export default ProductDetailsProvider;
