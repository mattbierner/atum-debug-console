/**
 * Start simple webserver so require text files are loaded correctly.
 */

var connect = require('connect');

var app = connect()
    .use(connect.static(__dirname))

connect.createServer(app).listen(8087);