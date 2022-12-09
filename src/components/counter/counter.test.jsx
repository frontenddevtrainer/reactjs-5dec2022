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
        const counterValue = screen.getByTestId("counter_value_text");
        expect(counterValue.textContent).toEqual("0");

    })

    test("Decrease counter value", ()=>{
        render(<Counter/>);

        const decreaseButton = screen.getByTestId("counter_decrease_button");
        const counterValue = screen.getByTestId("counter_value_text");

       act(()=>{
        decreaseButton.click()
       })

        expect(counterValue.textContent).toEqual("-1");

    })

    test("Increse counter value", ()=>{
        render(<Counter/>);

        const increaseButton = screen.getByTestId("counter_increase_button");
        const counterValue = screen.getByTestId("counter_value_text");

       act(()=>{
        increaseButton.click()
       })

        expect(counterValue.textContent).toEqual("1");

    })

    test("Snaopshot test", ()=>{
        const { asFragment } = render(<Counter/>);
        const content = asFragment();
        expect(content).toMatchSnapshot();
    })

    test("Snaopshot test after increasing the value", ()=>{
        const { asFragment } = render(<Counter/>);
        const increaseButton = screen.getByTestId("counter_increase_button");
        act(()=>{
            increaseButton.click()
           })
        const content = asFragment();
        expect(content).toMatchSnapshot();
    })

    test("Snaopshot test after decreasing the value", ()=>{
        const { asFragment } = render(<Counter/>);
        const increaseButton = screen.getByTestId("counter_decrease_button");
        act(()=>{
            increaseButton.click()
           })
        const content = asFragment();
        expect(content).toMatchSnapshot();
    })

})