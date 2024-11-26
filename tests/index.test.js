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
    });
});

describe("Shouting handling test", () => {
    it("Only shouting input: results a shouting greeting, single input", () => {
        console.log = jest.fn();
        greetings("BARRY");
        expect(console.log).toHaveBeenCalledWith("HELLO BARRY!");
    });

    it("Only shouting input: results a shouting greeting, multiple input", () => {
        console.log = jest.fn();
        greetings("ALICE","BOB","JERRY");
        expect(console.log).toHaveBeenCalledWith("HELLO ALICE, BOB AND JERRY!");
    });

    it("Mixed input: Separates the response into two greetings", () => {
        console.log = jest.fn();
        greetings("JAY","Maya","Alice","BOB","Charlotte");
        expect(console.log).toHaveBeenCalledWith("Hello Maya, Alice and Charlotte. HELLO JAY AND BOB!");
    });

})
