import {processLater} from "./my-async";

test("Wishing to test a promise when it is fulfilled after 300 ms", () => {
    return processLater.then(data => {
       expect(data).toBe("complete")
    });
})
