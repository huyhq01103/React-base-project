import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./assets/stylus/app.styl";
import Header from "components/header/header";
import Footer from "components/footer";
import Loading from "components/common/loading";
import ScrollToTop from 'src/components/common/ScrollToTop/ScrollTop';

const Home = lazy(() => import("src/components/pages/home/home"));

function App() {
	const base = "/:locale(vn|en)?";

	return (
		<Router>
			<ScrollToTop />
			<Route path={base} component={Header} />
			<div className="main-contain">
				{/* <Home /> */}
				<Suspense fallback={<Loading />}>
					<Switch>
						<Route exact path={base} component={Home} />
						<Redirect to={base} />
					</Switch>
				</Suspense>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
