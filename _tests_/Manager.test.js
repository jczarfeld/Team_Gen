const Manager = require("./Manager");

test("Instantiates new Manager", () => {
    const e = new Manager();
        expect(type(e).toBe("object"));
})