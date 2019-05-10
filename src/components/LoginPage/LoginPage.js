import React from "react";
import { Mutation } from "react-apollo";
// import { navigate } from "@reach/router";

import { LOGIN } from "../../mutations/login";
import Navbar from "../Navbar/Navbar";

export const LoginPage = () => {
  let emailInput, passwordInput;
	return (
		<Mutation mutation={LOGIN}>
    {(loginUser, { loading, error}) => (
      <>
      <Navbar />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser({
            variables: {
              data: {
                email: emailInput.value,
                password: passwordInput.value
              }
            }
          });
        }}
      >
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="email"
          autoComplete="email"
          name="email"
          ref={(node) => {
            emailInput = node;
          }}
        />
        <label htmlFor="Password">Name</label>
        <input
          type="password"
          placeholder="password"
          autoComplete="current-password"
          name="password"
          minLength="8"
          ref={(node) => {
            passwordInput = node;
          }}
        />
        <button type="submit">Register</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      </>
    )}
		</Mutation>
	);
};

export default LoginPage;





