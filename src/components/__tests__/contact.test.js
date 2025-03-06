import Contact from "../Contact"
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom";

describe("contact page test cases",()=>{
    test("to check for heading component",()=>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    test("to check for input component",()=>{
        render(<Contact />);
        const input = screen.getByPlaceholderText('Name')
        expect(input).toBeInTheDocument();
    })
    test("to check for button component",()=>{
        render(<Contact />);
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })
    it("to check for input Boxes",()=>{
        render(<Contact />);
        const inputBoxes = screen.getAllByRole('textbox')
        expect(inputBoxes.length).not.toBe(5);
    })
})

//test === it
