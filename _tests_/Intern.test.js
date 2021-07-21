const Intern = require("./Intern");

test("Instantiates new Intern", () => {
    const e = new Intern();
        expect(type(e).toBe("object"));
})