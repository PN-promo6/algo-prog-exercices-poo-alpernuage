class Person {
  name: string;
  surname: string;
  dateOfBirth: number;
  constructor(name: string, surname: string, dateOfBirth?: number) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
  }
  displayFullName() {
    console.log(this.name + " " + this.surname);
  }
}

let person1: Person = new Person("Alper", "Akbulut", 1987);
let person2: Person = new Person("Alper", "Bulut");
person1.displayFullName();
person2.displayFullName();
