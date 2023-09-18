import { Card } from "../components/Card"
// import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import ModeloCard from "../assets/images/modeloCard1.jpg"
import ImagenCard2 from "../assets/images/imagenCard2.jpg"
import ImagenCard3 from "../assets/images/imagenCard3.jpg"
import ImagenCard4 from "../assets/images/imagenCard4.jpg"
import ModeloInvierno from "../assets/images/modeloInvierno.jpg"
import "../assets/css/card.css"

const images =[ModeloCard,ImagenCard2,ImagenCard3,ImagenCard4]

export const Inicio = () => {
    console.log(images)
    return (
        <>
                <Header />
                <main>
                    <section className="seccionMultimedia">
                        <article>
                            <h2>VERANO PARIS 2022</h2>
                            <p>
                                El desfile mas grande de Paris se realizó con gran aceptación entre el público asistente. Pudimos ver lo último en la edición de colección de grandes diseñadores de la última decada, ademas el certamen fue respaldado por las firmas mas importantes del mundo de la moda.
                            </p>
                        </article>
                        <div className="videoMultimedia">
                            <iframe className="videoDesfile" width="560" height="315" src="https://www.youtube.com/embed/BLxM7yxo6Yk?controls=0&amp;start=188&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </section>
                    <section className="seccionTendencia">
                        <div className="cajaImagenTendencia">
                            <img src={ModeloInvierno} alt={ModeloInvierno} />
                        </div>
                        <article>
                            <h2>TENDENCIA EUROPEA</h2>
                            <p>
                                La propuesta otoño - invierno 2022 es relevante. Solo que quizás sea la próxima temporada cuando vuelvan a sobresalir y de convertirse, una vez más, en tendencia masica. La relación conceptual entre la libertad del verano y el movimiento que implica uno de los adornos más antiguos de la historia de la vestimenta está ahí.
                            </p>
                            <div className="botonConocer">
                                <a href="#">CONOCER</a>
                            </div>
                        </article>
                    </section>
                    <section className="seccionCards">
                        {images.map((imagen,index)=>(
                            <Card key={index} imagen={imagen}/>
                            ))
                        }
                    </section>
                </main>
                {/* <Footer /> */}
        </>
    )
}