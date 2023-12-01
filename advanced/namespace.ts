namespace DatabaseEntity {
  export class User {
    constructor(public name: string) {}
  }
  export const user1 = new User('Juan');
}

const user2 = new DatabaseEntity.User('Pedro');

console.log(user2);

