import React from "react";
import { Router } from "@reach/router";

import FrontPage from "../components/frontpage/frontpage";

const AppRouter = () => (
	<Router>
		<FrontPage path="/" />
	</Router>
);

export default AppRouter;
