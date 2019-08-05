import React, { Suspense } from "react";
import { Router } from "@reach/router";

const FrontPage = React.lazy( () => import( "../components/Frontpage/Frontpage" ) );
const About = React.lazy( () => import( "../components/about/about" ) );
const CreateListingPage = React.lazy( () =>
	import( "../components/CreateListingPage/CreateListingPage" )
);
const Dashboard = React.lazy( () => import( "../components/dashboard/Dashboard" ) );
const EditListingPage = React.lazy( () =>
	import( "../components/EditListingPage/EditListingPage" )
);
const Listing = React.lazy( () => import( "../components/Listing/Listing" ) );
const LoginPage = React.lazy( () => import( "../components/LoginPage/LoginPage" ) );
const Navbar = React.lazy( () => import( "../components/Navbar/Navbar" ) );
const NotFound = React.lazy( "../components/NotFound/NotFound.js" );
const RegistrationPage = React.lazy( () =>
	import( "../components/RegistrationPage/RegistrationPage" )
);

const AppRouter = () => (
	<Suspense fallback={ <div>Loading...</div> }>
		<Navbar />
		<Router className="app">
			<NotFound default />
			<FrontPage path="/" />
			<Dashboard path="/dashboard" />
			<RegistrationPage path="/register" />
			<LoginPage path="/login" />
			<CreateListingPage path="/listing/create" />
			<EditListingPage path="/listing/:id/edit" />
			<Listing path="/listing/:id" />
			<About path="/about" />
		</Router>
	</Suspense>
);

export default AppRouter;
