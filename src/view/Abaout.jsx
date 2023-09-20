
import ImagenConocenos1 from "../assets/images/imagenConocenos1.jpg"
import ImagenReferencialConocenos1 from "../assets/images/imagenReferencialConocenos1.jpg"
import ImagenReferencialConocenos2 from "../assets/images/imagenReferencialConocenos2.jpg"
import ImagenReferencialConocenos3 from "../assets/images/imagenReferencialConocenos3.jpg"
import ImagenReferencialConocenos4 from "../assets/images/imagenReferencialConocenos4.jpg"
import "../assets/css/abaut.css"

export const Abaout = () => {
    return (
        <>
            <main>
                <section className="bannerConocenos">
                    <img src={ImagenConocenos1} alt={ImagenConocenos1} />
                </section>
                <section className="descripcionConocenos">
                    <h2>TODO MODA</h2>
                    <p>
                        Todo moda forma parte de una de las compañias más grandes y consolidadas de América Latina que desarrolla su actividad comercial a través de varias áreas de negocio.
                        La tienda por departamentos es, hoy por hoy, la más importante de Sudamérica con más de 65,000 trabajadores en Chile, Argentina, Colombia y Perú.
                        A partir del 2001, Todo Moda se convierte en la primera cadena de tiendas por departamentos en apostar por las ciudades del interior del pais. La expansión fuera de Lima se inició en el norte del pais con aperturas en Trujillo, Chiclayo y Piura. Posteriormente se sumarían ubicaciones en Arequipa, Cajamarca e Ica. Hoy en día, Todo Moda sigue trabajando para llegar cada vez a más peruanos, cambiando de acuerdo a sus necesidades y haciendo así su vida más fácil.
                    </p>
                </section>
                <section className="imagenesReferencialesConocenos">
                    <article>
                            <img src={ImagenReferencialConocenos1} alt={ImagenReferencialConocenos1} />
                    </article>
                    <article>
                            <img src={ImagenReferencialConocenos2} alt={ImagenReferencialConocenos2} />
                    </article>
                    <article>
                            <img src={ImagenReferencialConocenos3} alt={ImagenReferencialConocenos3} />
                    </article>
                    <article>
                            <img src={ImagenReferencialConocenos4} alt={ImagenReferencialConocenos4} />
                    </article>
                </section>
            </main>
        </>
    )
}