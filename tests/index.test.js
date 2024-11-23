// TESTS HERE
const greetings = require('../src/index');

describe("Greetings input handling test", () => {
    it("No input: writes 'my friend' after the greeting", () => {
        console.log = jest.fn();
        greetings();
        expect(console.log).toHaveBeenCalledWith("Hello, my friend");
    });

    it("Single input: writes the name after the greeting", () => {
        console.log = jest.fn();
        greetings("Bob");
        expect(console.log).toHaveBeenCalledWith("Hello Bob");
    });

    it("Multiple input: same as single input,but separates the names with commas and closes with 'and'", () =>{
        console.log = jest.fn();
        greetings("Alice","Bob","Jerry");
        expect(console.log).toHaveBeenCalledWith("Hello Alice, Bob and Jerry");
    })
});
