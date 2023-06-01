import React, { useEffect, useState } from "react";

const TitleCompo = () => {
  let [title, setTitle] = useState("Title 1");
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <button
        onClick={() => {
          setTitle("Title 2");
        }}
      >
        Change Title
      </button>
    </div>
  );
};

export default TitleCompo;
