import React from 'react';
import './Acerca.css'; 

const AcercaDe = () => {
    return (
        <div className="acerca-de-container">
            <h2>Acerca de</h2>

            <div className="info-section">
                <h3>Datos Personales</h3>
                <ul>
                    <li><strong>Nombre:</strong> BRYAN NEFTALI CRUZ HERNANDEZ</li>
                    <li><strong>Matrícula:</strong> 20221094</li>
                    <li><strong>Numero De BIna:</strong> 5</li>
                    <li><strong>Carrera:</strong> INGENIERIA EN TECNOLOGIAS DE LA INFORMACION</li>
                    <li><strong>Docente:</strong> MCE. ANA MARIA FELIPE REDONDO</li>
                    <li><strong>Grado y Grupo:</strong> " 7 " CUATRIMESTRE GRUPO "B"  </li>
                    
                </ul>
            </div>

            <div className="info-section">
                <h3>Justificación de Uso de React</h3>
                <p>
                    He elegido React como framework para este proyecto debido a su flexibilidad, velocidad de desarrollo,
                    y su vasta comunidad de soporte. React es eficiente gracias a su virtual DOM, lo que mejora el
                    rendimiento en comparación con otros frameworks que manipulan el DOM real directamente. Además, la capacidad de dividir la interfaz en componentes reutilizables facilita el mantenimiento y la escalabilidad del código.
                </p>
            </div>

            <div className="info-section">
                <h3>Comparación de Frameworks: React vs. Laravel</h3>
                <p>
                    Comparando React con Laravel, ambos son herramientas poderosas, pero sirven para diferentes propósitos:
                    React es una biblioteca de JavaScript enfocada principalmente en la creación de interfaces de usuario dinámicas,
                    mientras que Laravel es un framework PHP diseñado para el desarrollo backend.
                </p>
                <p>
                    - Rendimiento: React utiliza el virtual DOM, lo que hace que sea extremadamente rápido en aplicaciones
                    front-end complejas, ya que solo actualiza las partes de la interfaz que cambian. Laravel, por otro lado, es más pesado ya que se enfoca en manejar la lógica del servidor, bases de datos y la interacción backend. El rendimiento de Laravel puede verse afectado cuando se manejan muchas consultas a la base de datos o lógica compleja, lo que lo hace menos óptimo para aplicaciones altamente interactivas en el lado del cliente.
                </p>
                <p>
                    - Facilidad de Implementación de Métodos: Para implementar cifrados en React, puedes hacer uso de diversas bibliotecas de JavaScript, como crypto-js para AES y otros algoritmos. Es relativamente sencillo agregar estos métodos en React debido a la naturaleza modular y reutilizable de los componentes. Laravel, al estar orientado al backend, también ofrece soluciones de cifrado mediante sus clases nativas como Hash y Crypt, que son fáciles de usar y seguras, pero el reto puede estar en coordinar el cifrado backend con una lógica frontend separada.
                </p>
            </div>

            <div className="info-section">
                <h3>Comparación de los Cifrados</h3>
                <p>
                    En términos de cifrado, AES es el más utilizado debido a su equilibrio entre seguridad y eficiencia, siendo rápido y fácil de implementar con bibliotecas modernas. El cifrado César, aunque fácil de implementar, es extremadamente inseguro para cualquier aplicación seria, siendo más un método didáctico. El cifrado Escítala, al igual que César, es muy básico y carece de seguridad en la era moderna. En cuanto a Diffie-Hellman, aunque no es un cifrado como tal, es crucial en el intercambio seguro de claves y sigue siendo utilizado hoy en día en protocolos como HTTPS.
                </p>
            </div>
        </div>
    );
}

export default AcercaDe;
