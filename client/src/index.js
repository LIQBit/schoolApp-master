import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from 'react-router-dom'
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/index";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
