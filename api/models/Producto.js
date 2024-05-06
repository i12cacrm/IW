const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    Descripcion: {
        type: String,
        required: true
    },
    Precio: {
        type: Double,
        required: true
    },
    Unidades: {
        type: Number,
    },
    Imagen: {
        type: String,
    }
}, {
    timestamps: true // Agrega timestamps automáticamente (createdAt, updatedAt)
});

module.exports = mongoose.model('Productos', ProductoSchema)
