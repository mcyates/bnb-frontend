import React from "react";
import { Router } from "@reach/router";

import FrontPage from "../components/frontpage/frontpage";
import Dashboard from "../components/dashboard/Dashboard";
import RegistrationPage from "../components/RegistrationPage/RegistrationPage";
import LoginPage from "../components/LoginPage/LoginPage";
import NotFound from "../components/NotFound/NotFound";

const AppRouter = () => (
	<Router>
		<NotFound default />
		<FrontPage path="/" />
		<Dashboard path="/dashboard" />
		<RegistrationPage path="/register" />
		<LoginPage path="/login" />
	</Router>
);

export default AppRouter;
