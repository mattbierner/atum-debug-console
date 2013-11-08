/**
 * Start simple webserver so require text files are loaded correctly.
 */

var connect = require('connect');

var app = connect()
    .use(connect.static(__dirname))
    .use(connect.static('resources'))

connect.createServer(app).listen(8087);