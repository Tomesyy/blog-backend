require('dotenv').config()
const http = require('http');
const express = require('express');

const db_connections = require('./connections/db.connection');

const app = express();

const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;

// database connection
if(process.env.PORT) db_connections.connectToOnlineDB()
else db_connections.connectToLocalDB()



server.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
})