import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useReadProductByIdQuery } from "../services/api/productService";

const ViewProductUsingRtk = () => {
  let params = useParams();
  let id = params.id;
  // let [product, setProduct] = useState({});

  let {
    isLoading: isLoadingReadDetails,
    isSuccess: isSuccessReadDetails,
    isError: isErrorReadDetails,
    error: errorReadDetails,
    data: dataReadDetails,
  } = useReadProductByIdQuery(id);

  let product = dataReadDetails?.data || {};

  useEffect(() => {
    if (isErrorReadDetails) {
      console.log(errorReadDetails.error);
    }
  }, [isErrorReadDetails, errorReadDetails]);

  // let getProduct = async () => {
  //   try {
  //     let output = await hitApi({
  //       method: "get",
  //       url: `/products/${id}`,
  //     });

  //     //   console.log(output.data.data);

  //     setProduct(output.data.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <div>
      {isLoadingReadDetails ? (
        <div>
          <h1>Loading ...</h1>
        </div>
      ) : (
        <div>
          <img
            alt="product img"
            src={product.productImage}
            style={{ width: "100px", height: "100px" }}
          ></img>
          <p>product name : {product.name}</p>
          <p>product company : {product.company}</p>
          <p> is in featured : {product.featured ? "yes" : "no"}</p>

          <p>
            {" "}
            manufactureDate :
            {new Date(product.manufactureDate).toLocaleDateString()}
          </p>

          <p>price: NRs. {product.price}</p>
          <p>quantity : {product.quantity}</p>
        </div>
      )}
    </div>
  );
};

export default ViewProductUsingRtk;
