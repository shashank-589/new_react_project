// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import { RouterProvider } from "react-router-dom";
// import { appRouter } from "./Router";
// import { Provider } from 'react-redux'
// import store from "./store/store";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(<Provider store={store}><RouterProvider router={appRouter} /></Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your root component
import './index.css'; // Import styles if applicable

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
