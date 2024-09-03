import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact us page test cases", () => {
    test("Should load contact us page", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside Contact component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Contact component should have 2 input fields", () => {
        render(<Contact />);
        const totalInputFields = screen.getAllByRole("textbox").length;
        expect(totalInputFields).toBe(2);
    });
})