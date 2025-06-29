const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Definir el esquema del producto
const ProductoSchema = new schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    categoria: {type: String, required: true},
    precio: {type: Number, required: true}
});

// Exportar el modelo del producto
module.exports = mongoose.model('Producto', ProductoSchema);