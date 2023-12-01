type Dog = {
  name: string;
  code: string;
  description?: string; //La propiedad description es opcional
};

const newDog = {
  name: 'Jack',
  code: 'H',
};

type newType = string | number | undefined;

let response: newType;

type newUser = 'super' | 'mod' | 'admin';

const juan:newUser='admin'
