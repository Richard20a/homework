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
});
