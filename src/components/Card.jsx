import PropTypes from 'prop-types';

export const Card=({imagen})=>{
    return (
        <article className="card">
            <div className="imagenCard">
                <img src={imagen} alt={imagen} />
            </div>
            <div className="contenidoCard">
                <h2>Cardigan formal</h2>
                <p>
                    Cardigan de estilo europeo con diseño de cuadros, de gran estilo y formal.
                </p>
                <a href="#">Leer mas</a>
            </div>
        </article>
    )
}

// Define PropTypes para la propiedad imagen
Card.propTypes = {
    imagen: PropTypes.string.isRequired, // Espera una cadena (string) y es requerida
};