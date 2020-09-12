require('dotenv').config()
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const db_connections = require('./connections/db.connection');
const socketConnections = require('./socket');
const adminRoutes = require('./routes/admin.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;
const URL_PREFIX = '/api/v1';

// database connection
if(process.env.PORT) db_connections.connectToOnlineDB()
else db_connections.connectToLocalDB()


app.use(fileUpload());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(`${URL_PREFIX}/admin`, adminRoutes);
app.use(URL_PREFIX, userRoutes);

//const io = socketConnections(server);

console.log(http.STATUS_CODES);
server.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
})