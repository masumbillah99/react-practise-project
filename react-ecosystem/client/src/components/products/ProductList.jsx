import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ProductDetailsContext } from "../../context";

const retrieveProducts = async ({ queryKey }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_LOCAL_JSON_SERVER}/${queryKey[0]}`
  );
  return res.data;
};

const ProductList = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
    retry: false,
  });

  const { setProductId } = useContext(ProductDetailsContext);

  if (isLoading) return <div>Fetching products...</div>;

  if (error) return <div>An error occured: {error.message}</div>;

  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {products &&
          products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center m-2 border rounded-sm"
            >
              <img
                className="object-cover h-64 w-96 rounded-sm"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="text-xl my-3">{product.title}</p>
              <button
                className="underline text-blue-500 mb-3"
                onClick={() => setProductId(product.id)}
              >
                Show Details
              </button>
            </li>
          ))}
      </ul>

      {/* <div className="flex">
        {products.prev && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.prev)}
          >
            {" "}
            Prev{" "}
          </button>
        )}
        {products.next && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.next)}
          >
            {" "}
            Next{" "}
          </button>
        )}
      </div> */}
    </div>
  );
};

export default ProductList;
