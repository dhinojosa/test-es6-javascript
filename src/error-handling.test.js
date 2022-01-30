import {problemFunction} from "./error-handling";

test("The way that we handle errors being thrown", () => {
    expect(() => {problemFunction()}).toThrow(Error);
});

test("That we can verify a regular expression!", () => {
    expect(() => problemFunction()).toThrow(/Issue/);
});
