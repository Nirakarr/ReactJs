import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./new.css";
import "./box.css";
// import NewApp from "./AllComponents/NewApp";
// import IncDec from "./AllComponents/IncDec";
// import Info from "./AllComponents/Info";
// import ResetIncDec from "./AllComponents/ResetIncDec";
// import AppApp from "./AppApp";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { BrowserRouter } from "react-router-dom";
import AppApp from "./AppApp";
import IncDec from "./AllComponents/IncDec";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <App />
  // <NewApp></NewApp>
  // <IncDec></IncDec>
  // <Info></Info>
  // <ResetIncDec></ResetIncDec>
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <AppApp></AppApp>
  //   </BrowserRouter>
  // </Provider>
  <IncDec></IncDec>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
