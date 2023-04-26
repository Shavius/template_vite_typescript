export default class Person {
    name: string;

    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getInfo(): string {
        return `Имя: ${this.name} Возраст: ${this.age}`;
    }
}
