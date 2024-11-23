// TESTS HERE
const greetings = require('../src/index');

describe("Greetings input handling test", () => {
    it("No input", () => {
        console.log = jest.fn();
        greetings();
        expect(console.log).toHaveBeenCalledWith("Hello, my friend");
    });
});
