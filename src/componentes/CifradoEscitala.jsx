import React, { useState } from 'react';
import { FaCopy, FaQuestionCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import './App.css';  // Asegúrate de importar el CSS global

const CifradoEscitala = () => {
    const [mensajeEscitala, setMensajeEscitala] = useState('');
    const [columnas, setColumnas] = useState(0);
    const [resultadoEscitala, setResultadoEscitala] = useState('');

    const cifrarEscitala = (mensaje, columnas) => {
        let resultado = '';
        for (let i = 0; i < columnas; i++) {
            for (let j = i; j < mensaje.length; j += columnas) {
                resultado += mensaje[j];
            }
        }
        return resultado;
    };

    const descifrarEscitala = (mensaje, columnas) => {
        const filas = Math.ceil(mensaje.length / columnas);
        let resultado = new Array(mensaje.length);
        let index = 0;

        for (let i = 0; i < columnas; i++) {
            for (let j = i; j < mensaje.length; j += columnas) {
                resultado[j] = mensaje[index++];
            }
        }

        return resultado.join('');
    };

    const copiarTexto = (texto) => {
        navigator.clipboard.writeText(texto);
        toast.success('Texto copiado al portapapeles');
    };

    const mostrarNotificacionEscitala = () => {
        toast.info("El Cifrado Escítala organiza el mensaje en columnas y se lee de forma vertical.", { autoClose: 30000 });
    };

    return (
        <div className="cifrado-box">
            <h2>Cifrado Escítala</h2>
            <input
                type="text"
                value={mensajeEscitala}
                onChange={(e) => setMensajeEscitala(e.target.value)}
                placeholder="Mensaje a cifrar"
                className="input-field"
            />
            <input
                type="number"
                value={columnas}
                onChange={(e) => setColumnas(e.target.value)}
                placeholder="Número de columnas"
                className="input-field"
            />
            <button className="btn" onClick={() => setResultadoEscitala(cifrarEscitala(mensajeEscitala, parseInt(columnas)))}>Cifrar</button>
            <button className="btn" onClick={() => setResultadoEscitala(descifrarEscitala(mensajeEscitala, parseInt(columnas)))}>Descifrar</button>
            <input type="text" value={resultadoEscitala} readOnly className="input-field" />
            <button className="btn" onClick={() => copiarTexto(resultadoEscitala)}><FaCopy className="icon" /> Copiar</button>
            <button className="btn" onClick={mostrarNotificacionEscitala}><FaQuestionCircle className="icon" /> ¿Cómo funciona?</button>
        </div>
    );
};

export default CifradoEscitala;
