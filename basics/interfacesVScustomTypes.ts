interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  charge: string;
}

const newEmployee: Employee = {
  charge: 'das',
  name: 'Pedro',
  age: 20,
};

type adminUser = {
  position: string;
};

type Admin = Person & adminUser;

const newAdmin: Admin = {
  name: 'Juan',
  age: 18,
  position: 'fd',
};
