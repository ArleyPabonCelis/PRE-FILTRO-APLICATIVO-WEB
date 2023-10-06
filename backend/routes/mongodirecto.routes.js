const express = require('express');
const {MongoClient} = require('mongodb');
const router = express.Router();
require('dotenv').config();

const database = process.env.MONGO_URI

router.get('/hola', async(req, res) => {
    try {
        res.json('SOPORTE TECNICO')
    } catch (e) {
        res.json('NO!, NO FUNCIONA!');
    }
})


router.get('/usuarios/m', async (req, res) => {
    try {
        const client = new MongoClient(database);
        await client.connect();
        const dataBase = client.db('computers');
        const coleccion = dataBase.collection('usuarios');
        const result = await coleccion.aggregate([
            {
              $lookup: {
                from: "generos", 
                localField: "genero",
                foreignField: "_id",
                as: "generoInfo"
              }
            },
            {
              $match: {
                "generoInfo.genero": "Masculino"
              }
            },
            {
              $project: {
                _id: 1,
                nombreUsuario: 1,
                correo: 1
              }
            }
          ]).toArray();
        res.json(result);
        client.close();
    } catch (e) {
        res.status(404).json("No se encontro los datos");
    }
});


router.get('/usuarios/f', async (req, res) => {
    try {
        const client = new MongoClient(database);
        await client.connect();
        const dataBase = client.db('computers');
        const coleccion = dataBase.collection('usuarios');
        const result = await coleccion.aggregate([
            {
              $lookup: {
                from: "generos", 
                localField: "genero",
                foreignField: "_id",
                as: "generoInfo"
              }
            },
            {
              $match: {
                "generoInfo.genero": "Femenino"
              }
            },
            {
              $project: {
                _id: 1,
                nombreUsuario: 1,
                correo: 1
              }
            }
          ]).toArray();
        res.json(result);
        client.close();
    } catch (e) {
        res.status(404).json("No se encontro los datos");
    }
});


router.get('/monitores/LED', async (req, res) => {
    try {
        const client = new MongoClient(database);
        await client.connect();
        const dataBase = client.db('computers');
        const coleccion = dataBase.collection('monitores');
        const result = await coleccion.find({ tipo: "LED" }).toArray();
        res.json(result);
        client.close();
    } catch (e) {
        res.status(404).json("No se encontro los datos");
    }
});



router.get('/monitores/LCD', async (req, res) => {
    try {
        const client = new MongoClient(database);
        await client.connect();
        const dataBase = client.db('computers');
        const coleccion = dataBase.collection('monitores');
        const result = await coleccion.find({ tipo: "LCD" }).toArray();
        res.json(result);
        client.close();
    } catch (e) {
        res.status(404).json("No se encontro los datos");
    }
});

module.exports = router;