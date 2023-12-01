var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    DatabaseEntity.user1 = new User('Juan');
})(DatabaseEntity || (DatabaseEntity = {}));
var user2 = new DatabaseEntity.User('Pedro');
console.log(user2);
/// <reference path='namespace.ts' />
console.log(DatabaseEntity.user1);
var user3 = new DatabaseEntity.User('José');
console.log(user3);
