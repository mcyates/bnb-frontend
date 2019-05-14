import React from "react";
import { Router } from "@reach/router";

import CreateListingPage from '../components/CreateListingPage/CreateListingPage';
import Dashboard from "../components/Dashboard/Dashboard";
import FrontPage from "../components/Frontpage/frontpage";
import RegistrationPage from "../components/RegistrationPage/RegistrationPage";
import LoginPage from "../components/LoginPage/LoginPage";
import NotFound from "../components/NotFound/NotFound";
import Navbar from "../components/Navbar/Navbar";
import Listing from "../components/Listing/Listing";

const AppRouter = () => (
	<>
	<Navbar />
	<Router className="app">
		<NotFound default />
		<FrontPage path="/" />
		<Dashboard path="/dashboard" />
		<RegistrationPage path="/register" />
		<LoginPage path="/login" />
		<CreateListingPage path="/listing/create" />
		<Listing path="/listing/:id" />
	</Router>
	</>
);

export default AppRouter;
