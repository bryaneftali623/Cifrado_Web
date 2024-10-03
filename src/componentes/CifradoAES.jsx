import React, { useState } from 'react';
import { FaCopy, FaQuestionCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';
import { Buffer } from 'buffer';


const CifradoAES = () => {
    const [textToEncrypt, setTextToEncrypt] = useState('');
    const [textToDecrypt, setTextToDecrypt] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');
    const [claveAES, setClaveAES] = useState('');

    // Cifrar el texto con AES
    const cifrarTextoAES = () => {
        const encrypted = CryptoJS.AES.encrypt(textToEncrypt, claveAES).toString();
        setEncryptedText(encrypted);
    };

    // Descifrar el texto con AES
    const descifrarTextoAES = () => {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, claveAES);
        const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
        setDecryptedText(decrypted);
    };

    // Copiar texto al portapapeles
    const copiarTexto = (texto) => {
        navigator.clipboard.writeText(texto).then(() => {
            toast.success('Texto copiado al portapapeles', {
                position: "top-right",
                autoClose: 2000,
            });
        });
    };

    // Mostrar explicación de AES
    const mostrarNotificacionAES = () => {
        toast.info(
            <>
                <p>
                    <strong>Explicación del Cifrado AES:</strong> AES (Advanced Encryption Standard) es un cifrado simétrico ampliamente usado.
                    Se utiliza la misma clave tanto para cifrar como para descifrar el mensaje.
                </p>
                <p>
                    Ejemplo: Si se cifra el mensaje "HOLA" con la clave "1234", el cifrado genera un texto ininteligible.
                    Para descifrarlo, necesitas la misma clave "1234".
                </p>
            </>,
            { position: "top-right", autoClose: 30000 }
        );
    };

    return (
        <div className="cifrado-box">
            <h2>Cifrado Simétrico (AES)</h2>
            <div className="input-container">
                <label>Texto a cifrar:</label>
                <input
                    type="text"
                    value={textToEncrypt}
                    onChange={(e) => setTextToEncrypt(e.target.value)}
                    className="input-field"
                />
            </div>
            <div className="input-container">
                <label>Clave secreta:</label>
                <input
                    type="text"
                    value={claveAES}
                    onChange={(e) => setClaveAES(e.target.value)}
                    className="input-field"
                />
            </div>
            <button onClick={cifrarTextoAES} className="btn">Cifrar</button>
            <div className="resultado">
                <h3>Texto Cifrado:</h3>
                <input type="text" value={encryptedText} readOnly className="input-field" />
                <button onClick={() => copiarTexto(encryptedText)} className="btn">
                    <FaCopy className="icon" />
                    Copiar
                </button>
            </div>
            <button onClick={descifrarTextoAES} className="btn">Descifrar</button>
            <div className="resultado">
                <h3>Texto Descifrado:</h3>
                <input type="text" value={decryptedText} readOnly className="input-field" />
                <button onClick={() => copiarTexto(decryptedText)} className="btn">
                    <FaCopy className="icon" />
                    Copiar
                </button>
            </div>
            <button className="btn" onClick={mostrarNotificacionAES}>
                <FaQuestionCircle className="icon" />
                ¿Cómo funciona el Cifrado AES?
            </button>
        </div>
    );
};

export default CifradoAES;
