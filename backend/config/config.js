const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI);
        const url = `CONECTADO A LA BASE DE DATOS EN EL SERVER: ${connectionDB.connection.host} - EN PUERTO: ${connectionDB.connection.port}`
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1)
    }
}

module.exports = conectarDB;