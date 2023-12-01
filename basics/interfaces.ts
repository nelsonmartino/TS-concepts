interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string; // El signo de interrogación vuelve el campo opcional
  sayHello?: () => string;
}

let person: Person = {
  name: 'Nelson',
  code: 18,
  charge: 20,
  description: 'student',
};

let person2: Person = {
  name: '',
  code: '',
  charge: 0,
};
