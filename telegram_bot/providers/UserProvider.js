var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:sa@localhost:5432/tgbot");
var User = require("./../models/User.js");

class UserProvider {
  start() {
    db.one(
      'INSERT INTO public."TGUsers"(id,tg_name,name,surname) VALUES (${id},${tg_name},${name},${surname})',
      testObj
    );
  }

  GetUserByTelegramName(tgName) {
    let user;
    db
      .any('SELECT * FROM public."TGUsers" WHERE tg_name=$1', tgName)
      .then(data => {
        user = new User(
          data[0].name,
          data[0].surname,
          data[0].tg_name,
          data[0].bonus
        );
      })
      .catch(error => {
        console.log("ERROR:", error); // print the error;
      });
  }

  CreateNewUser(user) {
    db.query(
      'INSERT INTO public."TGUsers"(tg_name,name,surname,bonus) VALUES (${tgName},${name},${surname},${bonus})',
      user
    );
  }

  GetUserAccount(tgName) {}
}
module.exports = UserProvider;
