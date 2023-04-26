import Person from "../modules/Person";

describe("Person", function () {
    it("Return string", function () {
        const person = new Person("Alan", 35);

        expect(person.getInfo()).toBe("Имя: Alan Возраст: 35");
    });
});
