import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error";
import Home from "./pages/Home";
import CreateEmployee from "./pages/CreateEmployee";
import ListEmployees from "./pages/ListEmployees";

function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
