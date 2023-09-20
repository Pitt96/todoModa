
import "../assets/css/contact.css"
import ImagenContacto from "../assets/images/imagenContacto.jpg"
export const Contact = ()=>{
    return (
        <>
            <main>
            <section className="informacionContacto">
                    <h2>ATENCIÓN AL CLIENTE</h2>
                    <form className="formulario">
                        <label htmlFor="">Nombre: </label>
                        <input type="text" name="nombre" placeholder="Ingrese su nombre" />
                        <label htmlFor="">Email: </label>
                        <input type="email" name="email" placeholder="example@outlook.com"/>
                        <label htmlFor="">Ingrese su comentario:</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <input className="boton" type="submit" value="Enviar"/>
                    </form>
                    <article className="imagenContacto">
                        <img src={ImagenContacto} alt={ImagenContacto} />
                    </article>
                </section>
            </main>
        </>
    )
}