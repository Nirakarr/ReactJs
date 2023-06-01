import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  useDeleteProductMutation,
  useReadProductQuery,
} from "../services/api/productService";
// import { hitApi } from "../services/hitapi";
// onclick function always takes function ; we should not use function call if we use function call we must return a function
// use function that return function when we need to pass a value

// (api) => (data) => display;

//delete product

const ShowAllProductsUsingRtk = () => {
  let {
    isError: isErrorReadProduct,
    isSuccess: isSuccessReadProduct,
    isLoading: isLoadingReadProduct,
    data: dataReadProduct,
    error: errorReadProduct,
  } = useReadProductQuery();
  let [
    deleteProduct,
    {
      isError: isErrorDeleteProduct,
      isSuccess: isSuccessDeleteProduct,
      isLoading: isLoadingDeleteProduct,
      data: dataDeleteProduct,
      error: errorDeleteProduct,
    },
  ] = useDeleteProductMutation();

  //   console.log(data?.data?.results);

  useEffect(() => {
    if (isErrorReadProduct) {
      console.log("**************", errorReadProduct?.error);
    }
  }, [isErrorReadProduct, errorReadProduct]);

  useEffect(() => {
    if (isErrorDeleteProduct) {
      console.log("**************", errorDeleteProduct?.error);
    }
  }, [isErrorDeleteProduct, errorDeleteProduct]);

  useEffect(() => {
    if (isSuccessDeleteProduct) {
      console.log("Product is deleted successfully.");
    }
  }, [isSuccessDeleteProduct]);

  let products = dataReadProduct?.data?.results;
  let navigate = useNavigate();

  let handleView = (item) => {
    return () => {
      navigate(`/products/${item._id}`);
    };
  };
  let handleclick = () => {
    console.log("button is clicked");
  };
  let handleEdit = (item) => {
    return () => {
      navigate(`/products/update/${item._id}`);
    };
  };

  return (
    <div>
      {isLoadingReadProduct ? (
        <div>
          <h1>... Loading</h1>
        </div>
      ) : (
        <div>
          {products?.map((item, i) => {
            return (
              <div
                key={i}
                style={{ border: "solid red 3px", marginBottom: "5px" }}
              >
                <img
                  alt="product img"
                  src={item.productImage}
                  style={{ width: "80px", height: "80px" }}
                ></img>
                <br></br>
                name: {item.name}
                <br></br>
                Price: {item.price}
                <br></br>
                Quantity: {item.quantity}
                <br></br>
                company: {item.company}
                <br></br>
                <button
                  onClick={async (e) => {
                    deleteProduct(item._id);
                  }}
                >
                  {isLoadingDeleteProduct ? "Deleting..." : "Delete Product"}
                </button>
                <button onClick={handleView(item)}>View Product</button>
                {/* onClick need function */}
                {/* we can use function in onClick
                or we can use function call in onClick but this time it must return function
                a functionCall way will be used if you want to pass some data
                if you dont want to pass data then use function defination
                 */}
                <button onClick={handleEdit(item)}>Edit Product</button>
                <button onClick={handleclick}>click me</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShowAllProductsUsingRtk;
