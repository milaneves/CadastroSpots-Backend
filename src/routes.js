const express = require ('express');  // importando o express
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessionController = require ('./controllers/SessionController');
const SpotController = require ('./controllers/SpotController');
const DashboardController = require ('./controllers/DashboardController');
const BookingController = require ('./controllers/BookingController');

const routes = express.Router(); // Pega o roteador do express e separando na variavel chamada 'routes'
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/bookings',BookingController.store ) // usuario cria uma resenha dentro do spot com o ID

//exportando as rotas do arquivo para aplicação conhecer as rotas
module.exports = routes;