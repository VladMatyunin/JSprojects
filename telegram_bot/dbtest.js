var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:sa@localhost:5432/tgbot");

const testObj = {
  id : 1,
  tg_name : 'sss',
  name : 'test',
  surname : 'sss'
}
function start(){
db.one('INSERT INTO public."TGUsers"(id,tg_name,name,surname) VALUES (${id},${tg_name},${name},${surname})',testObj)

};
module.exports = { start};