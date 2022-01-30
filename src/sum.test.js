import {sum, subtract} from './sum';

beforeAll(() => {
    console.log("Before all tests run")
});

afterAll(() => {
    console.log("After all tests run")
});

beforeEach(() =>{
    console.log("Before Each test")
});

afterEach(() =>{
    console.log("After Each test")
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('here is another test where we include some more items', () => {
    expect(sum(10, 4000)).toBe(4010);
})

test('a subtraction', () => {
    expect(subtract(200, 100)).toBe(100);
})
