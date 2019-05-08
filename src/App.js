import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ApolloClient, {gql} from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import FrontPage from "./components/frontpage/frontpage";
import "./App.css";




const initialState = {
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  render() {
    return (
      <React.Fragment>
        <FrontPage />
      </React.Fragment>
    );
  }
}



export default App;
