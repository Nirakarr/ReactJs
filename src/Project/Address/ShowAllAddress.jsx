// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { hitApi } from "../../services/hitapi";

// (api) => (data) => display;

//deleet Address

const ShowAllAddress = () => {
  let [address, setaddress] = useState([]);

  let navigate = useNavigate();

  let getAddress = async () => {
    try {
      let output = await hitApi({
        method: "get",
        url: "/address",
      });

      setaddress(output.data.data.results);
    } catch (error) {
      console.log(error.message);
    }

    // console.log(output);
  };

  //we can not use asyc keyword to the useEffect function
  useEffect(() => {
    getAddress();
  }, []);

  let handleView = (item) => {
    return () => {
      navigate(`/address/${item._id}`);
    };
  };
  let handleclick = () => {
    console.log("button is clicked");
  };
  let handleEdit = (item) => {
    return () => {
      navigate(`/address/update/${item._id}`);
    };
  };

  return (
    <div>
      {address.map((item, i) => {
        return (
          <div style={{ border: "solid red 3px", marginBottom: "5px" }}>
            <img
              alt="Address img"
              src={item.AddressImage}
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
                try {
                  await hitApi({
                    method: "delete",
                    url: `/address/${item._id}`,
                  });

                  getAddress();
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Delete Address
            </button>
            <button onClick={handleView(item)}>View Address</button>
            <button onClick={handleEdit(item)}>Edit Address</button>
            <button onClick={handleclick}>click me</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllAddress;
