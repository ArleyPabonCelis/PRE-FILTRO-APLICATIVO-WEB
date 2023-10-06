const express = require('express');
const app = express();

const conectarDB = require('./config/config.js');

const generoRouter = require('./routes/generos.routes.js');
const tiposRouter = require('./routes/tipos.routes.js');
const actividadesRouter = require('./routes/actividades.routes.js');
const rolesRouter = require('./routes/roles.routes.js');
const usuariosRouter = require('./routes/usuarios.routes.js');
const memoriasRouter = require('./routes/memorias.routes.js');
const discosRouter = require('./routes/discos.routes.js');
const tecladosRouter = require('./routes/teclados.routes.js');
const ratonesRouter = require('./routes/ratones.routes.js');
const otrosRouter = require('./routes/otros.routes.js');
const monitoresRouter = require('./routes/monitores.routes.js');
const estadosRouter = require('./routes/estados.routes.js');
const torresRouter = require('./routes/torres.routes.js');
const equiposRouter = require('./routes/equipos.routes.js');
const feedbacksRouter = require('./routes/feedbacks.routes.js');
const historialesRouter = require('./routes/historiales.routes.js');
const talleresRouter = require('./routes/talleres.routes.js');
const soportesRouter = require('./routes/soportes.routes.js');
const mongodbRoutes = require('./routes/mongodirecto.routes.js');

require('dotenv').config();
const PORT = process.env.PORT;

conectarDB();
app.use(express.json());

app.use('/computers', mongodbRoutes)
app.use('/generos', generoRouter);
app.use('/tipos', tiposRouter);
app.use('/actividades', actividadesRouter);
app.use('/roles', rolesRouter);
app.use('/usuarios', usuariosRouter);
app.use('/memorias', memoriasRouter);
app.use('/discos', discosRouter);
app.use('/teclados', tecladosRouter);
app.use('/ratones', ratonesRouter);
app.use('/otros', otrosRouter);
app.use('/monitores', monitoresRouter);
app.use('/estados', estadosRouter);
app.use('/torres', torresRouter);
app.use('/equipos', equiposRouter);
app.use('/feedbacks', feedbacksRouter);
app.use('/historiales', historialesRouter);
app.use('/talleres', talleresRouter);
app.use('/soportes', soportesRouter);



app.listen(PORT, () => {
    console.log(`Server web listenning on port ${PORT}`);
} );