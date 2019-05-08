import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ApolloClient, {gql} from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';


const URI = 'http://localhost:4000';
const client = new ApolloClient({
  uri: URI,
  clientState: {
    defaults: {},
    resolvers: {},
    typeDefs: ``
  }
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
)