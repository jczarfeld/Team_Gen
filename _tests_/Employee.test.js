const Employee = require("./Employee");

test("Instantiates new Employee", () => {
    const e = new Employee();
        expect(type(e).toBe("object"));
})