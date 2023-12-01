var users;
(function (users) {
    users[users["normalUser"] = 5] = "normalUser";
    users[users["payedUser"] = 6] = "payedUser";
    users["adminUser"] = "normal";
    users["megaUser"] = "mega";
})(users || (users = {}));
var myUser = users.adminUser;
console.log(myUser);
