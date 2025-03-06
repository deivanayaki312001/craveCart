import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import { MOCK_DATA1 } from "../../mocks/totalData";
import { act } from "react";
import "@testing-library/jest-dom";

// Mocking the fetch function globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA1),
  })
);

test("Search functionality filters the restaurant list correctly", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // Wait for restaurant cards to load
  const cardsBeforeSearch = await screen.findAllByTestId("restaurantCard");
  console.log(cardsBeforeSearch);
  expect(cardsBeforeSearch.length).toBe(8); // Ensure initial load

  // Get input and button elements
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchIP");

  // Simulate typing "Pizza" and clicking the search button
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);

  // Wait for filtered results
  const filteredCards = await screen.findAllByTestId("restaurantCard");
  expect(filteredCards.length).toBe(1); // Expect 1 matching restaurant
});

test("Search functionality filters the restaurant list correctly", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
  
    // Wait for restaurant cards to load
    const cardsBeforeSearch = await screen.findAllByTestId("restaurantCard");
    expect(cardsBeforeSearch.length).toBe(8); // Ensure initial load
  
    // Get input and button elements
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);
    const topRatedCards = await screen.getAllByTestId('restaurantCard');
    expect(topRatedCards.length).toBe(8);
  });
