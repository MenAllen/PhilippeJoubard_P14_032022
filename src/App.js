import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error";
import Home from "./pages/Home";
import CreateEmployee from "./pages/CreateEmployee";
import ListEmployees from "./pages/ListEmployees";

/**
 * The App function returns a div with a Router component, including a Header component,
 * Route components and a footer component.There are 4 Route components , each with a path and an element.
 * Provider makes Store available to every element, while PersistGate makes Store persistent
 * @returns The return statement is returning a div, the JSX code that will be rendered to the DOM.
 *
 */
function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Header />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/create" element={<CreateEmployee />} />
						<Route path="/list" element={<ListEmployees />} />
						<Route path="*" element={<Error />} />
					</Routes>
					<Footer />
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
