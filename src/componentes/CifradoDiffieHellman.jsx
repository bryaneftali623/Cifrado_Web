import React, { useState } from 'react';
import { FaCopy, FaQuestionCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CifradoDiffieHellman = () => {
    const [clavePublicaA, setClavePublicaA] = useState('');
    const [clavePublicaB, setClavePublicaB] = useState('');
    const [claveSecretaCompartida, setClaveSecretaCompartida] = useState('');

    // Simular la generación de claves Diffie-Hellman
    const generarClavesDH = () => {
        // Generar claves ficticias
        const claveA = Math.random().toString(36).substring(2, 15);
        const claveB = Math.random().toString(36).substring(2, 15);
        const claveSecreta = Math.random().toString(36).substring(2, 20);

        setClavePublicaA(claveA);
        setClavePublicaB(claveB);
        setClaveSecretaCompartida(claveSecreta);
        
        // Mostrar mensaje de éxito
        toast.success('Claves generadas con éxito', {
            position: "top-right",
            autoClose: 2000,
        });
    };

    const copiarTexto = (texto) => {
        navigator.clipboard.writeText(texto).then(() => {
            toast.success('Texto copiado al portapapeles', {
                position: "top-right",
                autoClose: 2000,
            });
        });
    };

    // Mostrar explicación detallada de Diffie-Hellman
    const mostrarNotificacionDH = () => {
        toast.info(
            <>
                <p>
                    <strong>Explicación de Diffie-Hellman:</strong> Este es un protocolo de intercambio de claves.
                    Dos partes pueden generar una clave secreta compartida sin que la clave se transmita por el canal.
                </p>
                <p>
                    Cada parte genera un par de claves: una pública y una privada. La clave pública se intercambia, y con la combinación de la clave pública del otro y su propia clave privada, ambas partes generan la misma clave compartida.
                </p>
            </>,
            { position: "top-right", autoClose: 30000 }
        );
    };

    return (
        <div className="cifrado-box">
            <h2>Diffie-Hellman  </h2>
            <h2>Intercambio de Claves</h2>
            <button onClick={generarClavesDH} className="btn">Generar Claves</button>
            <div className="resultado">
                <h3>Clave Pública A:</h3>
                <input type="text" value={clavePublicaA} readOnly className="input-field" />
                <button onClick={() => copiarTexto(clavePublicaA)} className="btn">
                    <FaCopy className="icon" />
                    Copiar
                </button>
            </div>
            <div className="resultado">
                <h3>Clave Pública B:</h3>
                <input type="text" value={clavePublicaB} readOnly className="input-field" />
                <button onClick={() => copiarTexto(clavePublicaB)} className="btn">
                    <FaCopy className="icon" />
                    Copiar
                </button>
            </div>
            <div className="resultado">
                <h3>Clave Secreta Compartida:</h3>
                <input type="text" value={claveSecretaCompartida} readOnly className="input-field" />
                <button onClick={() => copiarTexto(claveSecretaCompartida)} className="btn">
                    <FaCopy className="icon" />
                    Copiar
                </button>
            </div>
            <button className="btn" onClick={mostrarNotificacionDH}>
                <FaQuestionCircle className="icon" />
                ¿Cómo funciona Diffie-Hellman?
            </button>
        </div>
    );
};

export default CifradoDiffieHellman;
