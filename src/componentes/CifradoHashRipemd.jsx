import React, { useState } from 'react';
import { FaCopy, FaQuestionCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';
import { Buffer } from 'buffer';


const CifradoHashRipemd = () => {
    const [hashText, setHashText] = useState('');
    const [generatedHash, setGeneratedHash] = useState('');

    // Generar Hash con RIPEMD
    const generarHash = () => {
        const hashRIPEMD = CryptoJS.RIPEMD160(hashText);
        setGeneratedHash(hashRIPEMD.toString());
    };

    const copiarTexto = (texto) => {
        navigator.clipboard.writeText(texto).then(() => {
            toast.success('Texto copiado al portapapeles', {
                position: "top-right",
                autoClose: 2000,
            });
        });
    };

    // Mostrar explicación detallada de RIPEMD
    const mostrarNotificacionRIPEMD = () => {
        toast.info(
            <>
                <p>
                    <strong>Explicación de RIPEMD-160:</strong> Es una función de hash criptográfica que genera un código de longitud fija (160 bits).
                    Es útil para la integridad de los datos, ya que cualquier cambio en los datos originales genera un hash completamente diferente.
                </p>
            </>,
            { position: "top-right", autoClose: 30000 }
        );
    };

    return (
        <div className="cifrado-box">
            <h2>Hash (RIPEMD-160)</h2>
            <div className="input-container">
                <label>Texto a hashear:</label>
                <input
                    type="text"
                    value={hashText}
                    onChange={(e) => setHashText(e.target.value)}
                    className="input-field"
                />
            </div>
            <button onClick={generarHash} className="btn">Generar Hash</button>
            <div className="resultado">
                <h3>Hash Generado:</h3>
                <input type="text" value={generatedHash} readOnly className="input-field" />
                <button onClick={() => copiarTexto(generatedHash)} className="btn">
                    <FaCopy className="icon" />
                    Copiar
                </button>
            </div>
            <button className="btn" onClick={mostrarNotificacionRIPEMD}>
                <FaQuestionCircle className="icon" />
                ¿Cómo funciona RIPEMD-160?
            </button>
        </div>
    );
};

export default CifradoHashRipemd;
