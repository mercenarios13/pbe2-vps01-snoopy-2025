import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
});

const ClienteModel = mongoose.model('Cliente', clienteSchema);

export default ClienteModel;
