// TESTS HERE
const greetings = require('../src/index');

describe("Greetings input handling test", () => {
    it("No input: writes 'my friend' after the greeting", () => {
        console.log = jest.fn();
        greetings();
        expect(console.log).toHaveBeenCalledWith("Hello, my friend");
    });
});
