import HeaderComponent from "../HeaderComponent";
import { fireEvent, render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
test("Should load Header component with login button", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <HeaderComponent />;
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");
//assertion
    expect(loginButton).toBeInTheDocument();

});

test("Should load Header component with 0 Cart items", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <HeaderComponent />;
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("🛒(0)")
//assertion
    expect(cartItems).toBeInTheDocument();

});

test("Should change login button to logout on click", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <HeaderComponent />;
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name : "Login"});
    
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button" , {name : "Log Out"})
//assertion
    expect(logoutButton).toBeInTheDocument();

});
