import React, { useState } from 'react';
import { FaCopy, FaQuestionCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CifradoCesar = () => {
    const [mensajeCesar, setMensajeCesar] = useState('');
    const [desplazamiento, setDesplazamiento] = useState(0);
    const [resultadoCesar, setResultadoCesar] = useState('');

    const cifrarCesar = (texto, desplazamiento) => {
        return texto.replace(/[a-zA-Z]/g, (char) => {
            const codigo = char.charCodeAt(0);
            if (codigo >= 65 && codigo <= 90) {
                return String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
            }
            if (codigo >= 97 && codigo <= 122) {
                return String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
            }
            return char;
        });
    };

    const descifrarCesar = (texto, desplazamiento) => {
        return texto.replace(/[a-zA-Z]/g, (char) => {
            const codigo = char.charCodeAt(0);
            if (codigo >= 65 && codigo <= 90) {
                return String.fromCharCode(((codigo - 65 - desplazamiento + 26) % 26) + 65);
            }
            if (codigo >= 97 && codigo <= 122) {
                return String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
            }
            return char;
        });
    };

    const copiarTexto = (texto) => {
        navigator.clipboard.writeText(texto);
        toast.success('Texto copiado al portapapeles');
    };

    const mostrarNotificacionCesar = () => {
        toast.info("El Cifrado César desplaza letras en el alfabeto de forma cíclica.", { autoClose: 30000 });
    };

    return (
        <div className="cifrado-box">
            <h2>Cifrado César</h2>
            <input
                type="text"
                value={mensajeCesar}
                onChange={(e) => setMensajeCesar(e.target.value)}
                placeholder="Mensaje a cifrar"
                className="input-field"
            />
            <input
                type="number"
                value={desplazamiento}
                onChange={(e) => setDesplazamiento(e.target.value)}
                placeholder="Desplazamiento"
                className="input-field"
            />
            <button className="btn" onClick={() => setResultadoCesar(cifrarCesar(mensajeCesar, parseInt(desplazamiento)))}>Cifrar</button>
            <button className="btn" onClick={() => setResultadoCesar(descifrarCesar(mensajeCesar, parseInt(desplazamiento)))}>Descifrar</button>
            <input type="text" value={resultadoCesar} readOnly className="input-field" />
            <button className="btn" onClick={() => copiarTexto(resultadoCesar)}><FaCopy className="icon" /> Copiar</button>
            <button className="btn" onClick={mostrarNotificacionCesar}><FaQuestionCircle className="icon" /> ¿Cómo funciona?</button>
        </div>
    );
};

export default CifradoCesar;
