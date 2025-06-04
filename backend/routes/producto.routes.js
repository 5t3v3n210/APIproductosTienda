const express = require('express');
const router = express.Router();

const productoCtrl = require('../controllers/producto.controllers.js');

// Definir las rutas para los productos
router.get('/', productoCtrl.getProductos); // Obtener todos los productos  
router.get('/:id', productoCtrl.getProducto); // Obtener un producto por ID
router.post('/', productoCtrl.createProducto); // Crear un nuevo producto
router.put('/:id', productoCtrl.editarProducto); // Actualizar un producto por ID
router.delete('/:id', productoCtrl.eliminarProducto); // Eliminar un producto por ID

// Exportar las rutas
module.exports = router;