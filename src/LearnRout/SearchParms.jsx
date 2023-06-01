import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchParms = () => {
  let [searchParams] = useSearchParams();

  return (
    <div>
      {searchParams.get("name")}
      <br></br>
      {searchParams.get("age")}
      <br />
      {searchParams.get("address")}
    </div>
  );
};

export default SearchParms;
