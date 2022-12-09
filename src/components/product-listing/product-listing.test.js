import { getAllByTestId, render, waitFor, screen, waitForElementToBeRemoved } from "@testing-library/react";
import ProductListing from "./product-listing";
import axios from "axios";
import { api } from "../../config/urls"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

const mockDataNoRecords = [];
const mockdata = [{ userId: 1, id: 1, title: "This is a title", body: "This is content" }]

jest.mock("axios");

describe("Testing product listing", ()=>{

    test("product with no records", async ()=>{
        axios.get.mockResolvedValueOnce({ data: mockDataNoRecords })
        render(<ProductListing />);
        // Verify Mock.
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(api.posts)

        // Verify UI
        const errorMessage = await waitFor(()=>{
            return screen.findByText("No records found!")
        })
        expect(errorMessage).toBeInTheDocument()
    })

    test("product with records", async ()=>{
        axios.get.mockResolvedValueOnce({ data: mockdata })
        render(<BrowserRouter><ProductListing /></BrowserRouter>);
        // Verify Mock.
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(api.posts)

        // Verify UI
        await waitForElementToBeRemoved(()=>{
            return screen.queryByText("No records found!")
        })

        await waitFor(()=>{
            expect(screen.getByTestId("product-item")).toBeInTheDocument()
        })

        

    })

})