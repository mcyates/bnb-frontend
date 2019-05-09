import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "react-apollo";

import App from "./App";

const URI = "http://localhost:4000/";

const link = createUploadLink({
	uri: URI
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("token");

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ""
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(link),
	cache: new InMemoryCache(),
	clientState: {
		defaults: {
			user: {},
			listings: []
		},
    typeDefs: `

    `,
		resolvers: {}
	}
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
