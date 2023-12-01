class Animal {
  public name: 'Generic Animal'; // Default, no es necesario ponerlo. Accesible desde adentro y afuera, tambien desde clases extendidas.
  private age = 16; // Solo accesible internamente desde la misma clase. No accesible desde clases extendidas.
  protected identity = '111'; // Solo accesible internamente desde la misma clase y desde clases extendidas.
  constructor() {
    //es la función que representa la clase y se ejecuta al momento de crear el objeto
  }
  sayHi() {
    console.log('Grrrr', this.age);
  }
}

const myAnimal = new Animal();
myAnimal.sayHi();

// Herencia
class Dog extends Animal {
  type: 'Pastor Aleman';
  constructor() {
    super(); //En clases heredadas, debe incorporarse dentro del constructor para ejecutar todo lo heredado. Si no explicito el constructor, el llamado a super se hace en forma implícita, pero se explicito el constructor, debo incorporar super().
    console.log('Dog registered successfully');
  }
  sayBye() {
    console.log(this.identity);
  }
}

const myDog = new Dog();
myDog.sayHi();
myDog.sayBye();