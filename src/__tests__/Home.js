import { Provider } from "react-redux";
import { store } from "../store";
import Home from "../pages/Home";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
	test("Should render without crash", async () => {
		render(
			<Provider store={store}>
				<Home />
			</Provider>
		);
	});
});
