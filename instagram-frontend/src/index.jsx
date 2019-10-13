import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App.jsx";
import Client from "./Apollo/Client";
import { ApolloProvider } from "react-apollo-hooks";


ReactDOM.render( 
    <ApolloProvider client={Client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root")
);