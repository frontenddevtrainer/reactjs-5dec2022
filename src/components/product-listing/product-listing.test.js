import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import ProductListing from "./product-listing";
import axios from "axios";
import { api } from "../../config/urls"
import { act } from "react-dom/test-utils";

const mockDataNoRecords = [];
const mockdata = [{ userId: 1, id: 1, title: "This is a title", body: "This is content" }]

jest.mock("axios");

describe("Testing product listing", ()=>{

    test("product with no records", async ()=>{


        axios.get.mockResolvedValueOnce(mockdata)

        render(<ProductListing />);

        await waitForElementToBeRemoved(() => screen.queryByText("No records found!."))

        const title = await screen.findByText("This is a title");
        expect(title).toBeInTheDocument();
        
    })

})