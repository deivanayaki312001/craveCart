import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResCard from "../ResCard";

import  MOCK_DATA from "../../mocks/resCardMock.json";

test("name should present",()=>{
    render(<ResCard  resData={MOCK_DATA}  />);
    const name = screen.getByText("Abitha Biriyani Hotel");
    expect(name).toBeInTheDocument();
})