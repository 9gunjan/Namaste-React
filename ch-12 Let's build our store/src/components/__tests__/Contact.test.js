import { render , screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us page Test cases", () => {
    test('Should load contact us component', () => { 

        render(<Contact/>)
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test('Should test whether button is there or not', () => {
        render(<Contact/>)
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        //console.log(inputBoxes.length)
    
        //Assertion
    
        expect(inputBoxes.length).toBe(2);
    })

});

