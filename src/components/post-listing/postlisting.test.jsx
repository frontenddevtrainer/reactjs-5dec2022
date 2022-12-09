import { render, screen } from "@testing-library/react";
import PostListing from "./postlisting"
import { BrowserRouter } from "react-router-dom";

const mockdata = [{ userId: 1, id: 1, title: "This is a title", body: "This is content" }]


describe("Snapshot testing for PostListing", ()=>{
    test("Render PostListing without data", ()=>{

        const { asFragment } = render(<PostListing/>);
        const content = asFragment()
        expect(content).toMatchSnapshot();

    })
    

    test("Render PostListing with data", ()=>{

        const { asFragment } = render(<BrowserRouter>
            <PostListing  data={mockdata}/>
        </BrowserRouter>
        
        );
        const content = asFragment()
        expect(content).toMatchSnapshot();

    })
})

describe("UT testing for PostListing", ()=>{

    test("Render PostListing without data", ()=>{
        render(<PostListing/>);
        expect(screen.getByText("No records found!.")).toBeInTheDocument()
    })

    test("Render PostListing with data", ()=>{
        render(<BrowserRouter><PostListing data={mockdata} /></BrowserRouter>);
        expect(screen.getByText(mockdata[0].title)).toBeInTheDocument()
        expect(screen.getByText(mockdata[0].body)).toBeInTheDocument()
    })
    
})