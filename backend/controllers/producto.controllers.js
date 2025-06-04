const Producto = require('../models/producto.models.js');
const productoCtrl = {};

// definir los metodos del controlador
productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
};

// consultar un solo producto
productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
};

// crrear un producto
productoCtrl.createProducto = async (req, res) => {
    const producto = new Producto(req.body);
    await producto.save();
    res.json({
        'status': 'Producto guardado'
    });
};

// actualizar un producto
productoCtrl.editarProducto = async (req, res) => {
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precio: req.body.precio
    };
    await Producto.findByIdAndUpdate(id, {$set: productoEdit}, {new: true});
    res.json({
        'status': 'Producto actualizado'
    });
};

// eliminar un producto
productoCtrl.eliminarProducto = async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({
        'status': 'Producto eliminado'
    });
};

// exportar el controlador
module.exports = productoCtrl;

