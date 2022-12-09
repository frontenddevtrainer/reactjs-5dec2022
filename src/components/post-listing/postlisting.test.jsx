import { render, screen } from "@testing-library/react";
import PostListing from "./postlisting"
import { BrowserRouter } from "react-router-dom";

describe("Snapshot testing for PostListing", ()=>{
    test("Render PostListing without data", ()=>{

        const { asFragment } = render(<PostListing/>);
        const content = asFragment()
        expect(content).toMatchSnapshot();

    })
    

    test("Render PostListing with data", ()=>{

        const mockdata = [{ userId: 1, id: 1, title: "mock title", body: "mock content" }]

        const { asFragment } = render(<BrowserRouter>
            <PostListing  data={mockdata}/>
        </BrowserRouter>
        
        );
        const content = asFragment()
        expect(content).toMatchSnapshot();

    })
})

describe("UT testing for PostListing", ()=>{
    
})