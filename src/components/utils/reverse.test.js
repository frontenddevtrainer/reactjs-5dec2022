import { reverse } from "./reverse"

describe("testing utils > reverse", ()=>{

    test("reverse", ()=>{
        expect(reverse("abc")).toBe("cba")
    })

})