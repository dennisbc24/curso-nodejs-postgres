const { Client } = require('pg');

async function getConnection(){
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'dennis',
        password: 'admin123',
        database: 'my_store'
    });
    
    // vamos a recibir una promesa
    await client.connect();
    return client;
}

module.exports = getConnection;