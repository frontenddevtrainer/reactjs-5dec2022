import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Counter from "./counter";

describe("Unit test for: Counter Component", ()=>{
    test("Counter component should render", ()=>{
        render(<Counter/>);
    })

    test.todo("Increase counter value")

    test("Load counter with 0", ()=>{
        render(<Counter/>);
        const counterValue = screen.getByTestId("counter-value-text");
        expect(counterValue.textContent).toEqual("0");

    })

    test("Decrease counter value", ()=>{
        render(<Counter/>);

        const decreaseButton = screen.getByTestId("counter-decrease-button");
        const counterValue = screen.getByTestId("counter-value-text");

       act(()=>{
        decreaseButton.click()
       })

        expect(counterValue.textContent).toEqual("-1");

    })

    test("Increse counter value", ()=>{
        render(<Counter/>);

        const increaseButton = screen.getByTestId("counter-increase-button");
        const counterValue = screen.getByTestId("counter-value-text");

       act(()=>{
        increaseButton.click()
       })

        expect(counterValue.textContent).toEqual("1");

    })

})