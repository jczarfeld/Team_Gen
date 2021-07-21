const Engineer = require("./Engineer");

test("Instantiates new Engineer", () => {
    const e = new Engineer();
        expect(type(e).toBe("object"));
})