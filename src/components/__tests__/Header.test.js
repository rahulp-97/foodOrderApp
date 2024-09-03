import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

describe("Header component test cases", () => {
  it("Should render the Header component with Online status", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const onlineStatus = screen.getByText(/Online/);
    expect(onlineStatus).toBeInTheDocument();
  });
  it("Should render the Header component Home", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
  });
  it("Should render the Header component with About us", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const aboutText = screen.getByText("About us");
    expect(aboutText).toBeInTheDocument();
  });
  it("Should render the Header component with Contact us", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const contactText = screen.getByText("Contact us");
    expect(contactText).toBeInTheDocument();
  });
  it("Should render the Header component with Grocery", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const groceryText = screen.getByText("Grocery");
    expect(groceryText).toBeInTheDocument();
  });
  it("Should render the Header component with zero cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart (0 items)");
    expect(cartItems).toBeInTheDocument();
  });
  it("Should render the Header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });
  it("Should change the login button content on click to admin user", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: 'admin user'}}>
          <Header />
        </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: "login"});
    fireEvent.click(loginButton);
    const adminUser = screen.getByRole("button", {name: "admin user"});
    expect(adminUser).toBeInTheDocument();
  });
});
