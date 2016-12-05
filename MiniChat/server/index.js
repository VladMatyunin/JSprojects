/**
 * Created by Vlad.M on 05.12.2016.
 */
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');
var handle = {};
handle["/"] = requestHandlers.start;
handle["/messages/load"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);