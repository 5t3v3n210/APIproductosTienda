const mongoose = require('mongoose');
const URI = 'mongodb+srv://maicolbarrios873:yJoHrkOLHrPiBy72@productos.vykannr.mongodb.net/?retryWrites=true&w=majority&appName=productos';

mongoose.connect(URI)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;