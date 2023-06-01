import React from "react";

const StoreElements = () => {
  let userInfo = [
    {
      name: "nitan",
      age: 28,
      address: "gagalphedi",
    },
    {
      name: "nirakar",
      age: 21,
      address: "baneswor",
    },
    {
      name: "LOku",
      age: 21,
      address: "koteswor",
    },
  ];
  return (
    <div>
      {userInfo.map((v, i) => {
        return (
          <div>
            {v.name} {v.age} {v.address}
          </div>
        );
      })}
    </div>
  );
};

export default StoreElements;
