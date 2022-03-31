import {sumEqual} from "./sumEqual";

it("sumEqual", () => {
    expect(sumEqual(3, 5)).toEqual(8)
    expect(sumEqual(2, 5)).not.toEqual(4)
})

