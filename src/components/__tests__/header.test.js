import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("header tests",()=>{
    test("should contain login button", () => {
        render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );
        const loginButton = screen.getByRole("button",{name : 'Login'})
        expect(loginButton).toBeInTheDocument()
      });
      test("should contain cart button", () => {
          render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header />
              </Provider>
            </BrowserRouter>
          );
          const cartButton = screen.getByText(/Cart/);   //regex , no need of giving exact text
          expect(cartButton).toBeInTheDocument()
        });
        test("should change to login/logout on change", () => {
            render(
              <BrowserRouter>
                <Provider store={appStore}>
                  <Header />
                </Provider>
              </BrowserRouter>
            );
            const loginButton = screen.getByRole('button',{name : 'Login'});
            fireEvent.click(loginButton);
            const logoutButton = screen.getByRole("button",{name :'Logout'});
            expect(logoutButton).toBeInTheDocument()
          });
})

