import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { ProductDetailsContext } from "../../context";

const retrieveProducts = async ({ queryKey }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_LOCAL_JSON_SERVER}/${queryKey[0]}/${queryKey[1]}`
  );
  return res.data;
};

const ProductDetails = () => {
  const { productId } = useContext(ProductDetailsContext);

  const { data: product } = useQuery({
    queryKey: ["products", productId],
    queryFn: retrieveProducts,
    retry: false,
  });

  return (
    <div className="w-1/5 xl:fixed xl:right-32 xl:top-5">
      <h1 className="text-3xl text-center my-2">Product Details</h1>
      <div className="border bg-gray-100 p-2 text-base text-center rounded flex flex-col">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="object-cover h-24 w-24 border rounded-full m-auto"
        />
        <p className="font-bold text-lg my-3">{product?.title}</p>
        <p className="font-semibold my-3">{product?.description}</p>
        <p className="font-semibold my-3">Price: USD {product?.price}</p>
        <p className="font-semibold my-3">Rating: {product?.rating}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
