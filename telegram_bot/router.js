var accountController = require('./controllers/AccountController.js');
var menuController = require('./controllers/MenuController.js');
var mainController = require('./controllers/MainController.js');

const CONTROLLER_MAPPINGS = {
    'account' : accountController,
    'main' : mainController,
    'menu' : menuController
}
function handle(route, msg){
    let routes = route.split('/');
    let rootRoute = routes[1];
    routes.splice(1,1);
    routes = routes.join('/');
    console.log(routes);
    CONTROLLER_MAPPINGS[rootRoute].handle(routes,  msg);
}

module.exports = {handle};