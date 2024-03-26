import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { ProductDetailsContext } from "../../context";
import { useEffect } from "react";

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
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setAllProducts([...products]);
    }
  }, [products]);

  const { mutate } = useMutation({
    mutationFn: (productId) =>
      axios.delete(
        `${import.meta.env.VITE_LOCAL_JSON_SERVER}/products/${productId}`
      ),
  });

  const handleDeleteProduct = (id) => {
    const isConfrimed = window.confirm(
      "Are you sure you want to delete this product"
    );
    if (isConfrimed) {
      const reaminingProducts = allProducts?.filter((pdt) => pdt.id !== id);
      setAllProducts(reaminingProducts);
      mutate(id);
    }
  };

  if (isLoading) return <div>Fetching products...</div>;

  if (error) return <div>An error occured: {error.message}</div>;

  return (
    <div className="flex flex-col justify-center items-center w-3/5 xl:ml-80">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {allProducts &&
          allProducts?.map((product) => (
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
              <div className="flex justify-between items-center gap-32 py-3">
                <button
                  className="underline text-blue-500"
                  onClick={() => setProductId(product.id)}
                >
                  Show Details
                </button>

                <button
                  className="text-red-500 underline"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
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
