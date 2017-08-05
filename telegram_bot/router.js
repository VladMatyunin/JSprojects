var accountController = require('./controllers/AccountController.js');
var menuController = require('./controllers/MenuController.js');
var mainController = require('./controllers/MainController.js');

const CONTROLLER_MAPPINGS = {
    '/account' : accountController,
    '/main' : mainController,
    '/menu' : menuController
}
function handle(route, msg){
    let routes = route.split('/');
    let rootRoute = routes[0];

    CONTROLLER_MAPPINGS[rootRoute].handle(function(routes){
        routes.remove(0);
        routes.join('/');
        return routes;
    },  msg);
}
module.exports = {handle};