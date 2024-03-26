import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AddProduct = () => {
  const queryClient = useQueryClient();
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 5,
    thumbnail: "",
  });

  /** post on api using query mutation */
  const { mutate, isSuccess, isPending, isError, error } = useMutation({
    mutationFn: (newProduct) =>
      axios.post(
        `${import.meta.env.VITE_LOCAL_JSON_SERVER}/products`,
        newProduct
      ),
    onSuccess: (data, variables, context) => {
      // `context` comes from the onMuate method (return value)
      // `invalidateQueries`: clear the cache and update the ui
      queryClient.invalidateQueries(["products"]);
    },
  });

  const handleSubmitData = (evt) => {
    evt.preventDefault();
    const newProductData = {
      ...productData,
      id: crypto.randomUUID().toString(),
    };
    mutate(newProductData);
  };

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.type === "number"
        ? evt.target.valueAsNumber
        : evt.target.value;

    setProductData({ ...productData, [name]: value });
  };

  if (isPending) {
    return <span>Submitting...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="m-2 w-1/5 h-1/2 xl:fixed xl:top-4 xl:bottom-0 xl:left-5 xl:right-0">
      <h1 className="text-3xl text-center my-2">Add Product</h1>

      {isSuccess && (
        <p className="text-center text-white text-xl font-semibold bg-green-500 py-3">
          Succesfully add a product
        </p>
      )}

      <form
        className="flex flex-col p-5 bg-gray-100"
        onSubmit={handleSubmitData}
      >
        <input
          type={"text"}
          name="title"
          value={productData.title}
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a product title"
        />

        <textarea
          type={"text"}
          name="description"
          value={productData.description}
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter product description"
        />

        <input
          type={"text"}
          name="price"
          value={productData.price}
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter product price"
        />

        {/* <input
          type={"text"}
          name="rating"
          value={productData.rating}
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="rating of the product"
        /> */}

        <input
          type={"text"}
          name="thumbnail"
          value={productData.thumbnail}
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="thumbnail of the product"
        />

        <button type="submit" className="bg-slate-700 p-2 my-3 text-white">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
