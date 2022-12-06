//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error";
import Home from "./pages/Home";
import CreateEmployee from "./pages/CreateEmployee";
import ListEmployees from "./pages/ListEmployees";
import reportWebVitals from "./reportWebVitals";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
