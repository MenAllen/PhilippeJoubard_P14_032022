import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import CreateForm from "../components/CreateForm/CreateForm";
import { render, screen } from "@testing-library/react";

describe("CreateForm", () => {
	test("Should render without crash", async () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateForm />
				</Router>
			</Provider>
		);
	});
});
