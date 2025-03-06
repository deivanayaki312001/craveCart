import Menu from "../Menu";
import Header from "../Header";
import Cart from "../Cart";
import { MOCK_DATA2 } from "../../mocks/menuMock";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { act } from "react";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA2),
  })
);


describe("tests related to cart",()=>{
    test("to check cart flow", async () => {
        await act(async () => {
          render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header />
                <Menu />
                <Cart />
              </Provider>
            </BrowserRouter>
          );
        });
        const accordianTitle = screen.getByText("Recommended (20)");
        fireEvent.click(accordianTitle);
        const foodItems = screen.getAllByTestId("foodItems");
        expect( screen.getByText("Cart -(0)")).toBeInTheDocument();
        expect(foodItems.length).toBe(20);
        const addBtns = screen.getAllByTestId("addBtn");
        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);
        fireEvent.click(addBtns[2]);
        console.log(addBtns.length);
        expect( screen.getByText("Cart -(3)")).toBeInTheDocument();
      });
      test("to check cart flow", async () => {
        await act(async () => {
          render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header />
                <Menu />
                <Cart />
              </Provider>
            </BrowserRouter>
          );
        });
        expect(screen.getAllByTestId("foodItems").length).toBe(3);
      });
      test("to check clear cart", async () => {
        await act(async () => {
          render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header />
                <Menu />
                <Cart />
              </Provider>
            </BrowserRouter>
          );
        });
        const clearCartBtn = screen.getByRole("button",{name : "Clear Cart"});
        fireEvent.click(clearCartBtn);
        expect(screen.queryAllByTestId("foodItems")).toHaveLength(0);
        expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
      });   
})
