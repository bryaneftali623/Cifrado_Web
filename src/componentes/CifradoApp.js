import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCopy, FaQuestionCircle } from 'react-icons/fa'; // Importar iconos de react-icons

const CifradoApp = () => {
    const [mensajeCesar, setMensajeCesar] = useState('');
    const [desplazamiento, setDesplazamiento] = useState(0);
    const [resultadoCesar, setResultadoCesar] = useState('');

    const [mensajeEscitala, setMensajeEscitala] = useState('');
    const [columnas, setColumnas] = useState(0);
    const [resultadoEscitala, setResultadoEscitala] = useState('');

    // Función para cifrar con César
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

    // Función para descifrar con César
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

    // Función para cifrar con Escítala
    const cifrarEscitala = (mensaje, columnas) => {
        let resultado = '';
        for (let i = 0; i < columnas; i++) {
            for (let j = i; j < mensaje.length; j += columnas) {
                resultado += mensaje[j];
            }
        }
        return resultado;
    };

    // Función para descifrar con Escítala
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
        navigator.clipboard.writeText(texto).then(() => {
            toast.success('Texto copiado al portapapeles', {
                position: "top-right",
                autoClose: 2000,
            });
        });
    };

    // Mostrar explicación detallada de César en una notificación
    const mostrarNotificacionCesar = () => {
        toast.info(
            <>
                <p>
                    <strong>Explicación del Cifrado César:</strong> El Cifrado César desplaza cada letra un número fijo de posiciones en el alfabeto.
                    El alfabeto se considera cíclico, por lo que después de "Z" vuelve a "A". 
                </p>
                <p>
                    Ejemplo: Si se cifra la palabra <strong>"HOLA"</strong> con un desplazamiento de 3:
                </p>
                <p>
                    "H" ➡️ "K" , "O" ➡️ "R" , "L" ➡️ "O" , "A" ➡️ "D". 
                </p>
                <p>
                    Resultado: <strong>"KROD"</strong>.
                </p>
            </>, 
            { position: "top-right", autoClose: 30000 }
        );
    };

    // Mostrar explicación detallada de Escítala en una notificación
    const mostrarNotificacionEscitala = () => {
        toast.info(
            <>
                <p>
                    <strong>Explicación del Cifrado Escítala:</strong> El Cifrado Escítala organiza el mensaje en filas y columnas.
                    Luego, el mensaje se lee columna por columna. 
                </p>
                <p>
                    Ejemplo: Si el mensaje es <strong>"HOLAAMIGO"</strong> y se usan 4 columnas, se organiza como:
                </p>
                <p>
                    H O L A <br />
                    A M I G <br />
                    O
                </p>
                <p>
                    Al leer columna por columna, el resultado cifrado sería: <strong>"HAOOLMAGI"</strong>.
                </p>
            </>, 
            { position: "top-right", autoClose: 30000 }
        );
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Aplicación de Cifrados</h1>

            <div className="grid-container">
                <div className="cifrado-box">
                    <h2>Cifrado César</h2>
                    <div className="input-container">
                        <label>Mensaje:</label>
                        <input
                            type="text"
                            value={mensajeCesar}
                            onChange={(e) => setMensajeCesar(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="input-container">
                        <label>Desplazamiento:</label>
                        <input
                            type="number"
                            value={desplazamiento}
                            onChange={(e) => setDesplazamiento(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <button type="button" onClick={() => setResultadoCesar(cifrarCesar(mensajeCesar, parseInt(desplazamiento)))} className="btn">
                        Cifrar
                    </button>
                    <button type="button" onClick={() => setResultadoCesar(descifrarCesar(mensajeCesar, parseInt(desplazamiento)))} className="btn">
                        Descifrar
                    </button>
                    <div className="resultado">
                        <h3>Resultado César:</h3>
                        <input type="text" value={resultadoCesar} readOnly className="input-field" />
                        <button onClick={() => copiarTexto(resultadoCesar)} className="btn">
                            <FaCopy className="icon" />
                            Copiar
                        </button>
                    </div>
                    <button className="btn" onClick={mostrarNotificacionCesar}>
                        <FaQuestionCircle className="icon" />
                        ¿Cómo funciona el Cifrado César?
                    </button>
                </div>

                <div className="cifrado-box">
                    <h2>Cifrado Escítala</h2>
                    <div className="input-container">
                        <label>Mensaje:</label>
                        <input
                            type="text"
                            value={mensajeEscitala}
                            onChange={(e) => setMensajeEscitala(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="input-container">
                        <label>Columnas:</label>
                        <input
                            type="number"
                            value={columnas}
                            onChange={(e) => setColumnas(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <button type="button" onClick={() => setResultadoEscitala(cifrarEscitala(mensajeEscitala, parseInt(columnas)))} className="btn">
                        Cifrar
                    </button>
                    <button type="button" onClick={() => setResultadoEscitala(descifrarEscitala(mensajeEscitala, parseInt(columnas)))} className="btn">
                        Descifrar
                    </button>
                    <div className="resultado">
                        <h3>Resultado Escítala:</h3>
                        <input type="text" value={resultadoEscitala} readOnly className="input-field" />
                        <button onClick={() => copiarTexto(resultadoEscitala)} className="btn">
                            <FaCopy className="icon" />
                            Copiar
                        </button>
                    </div>
                    <button className="btn" onClick={mostrarNotificacionEscitala}>
                        <FaQuestionCircle className="icon" />
                        ¿Cómo funciona el Cifrado Escítala?
                    </button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default CifradoApp;
