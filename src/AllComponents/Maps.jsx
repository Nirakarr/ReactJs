import React from "react";
export let Maps = ({ abc, name, age }) => {
  let userInfo = [
    {
      productid: "C123",
      productname: "Product Name 1",
      productprice: 2000,
    },
    {
      productid: "C124",
      productname: "Product Name 2",
      productprice: 3000,
    },
    {
      productid: "C125",
      productname: "Product Name 3",
      productprice: 4000,
    },
  ];
  return (
    <div className={abc}>
      {name}
      {userInfo.map((v, i) => {
        return (
          <div>
            {v.productid}){v.productname}:{v.productprice}
          </div>
        );
      })}
    </div>
  );
};

export default Maps;
// props
// Farmik , atk
// hook - useState,useEffect,useRef
// How to request - axious
