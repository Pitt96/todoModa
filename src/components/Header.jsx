import "../assets/css/header.css"
export const Header = () => {
    return (
            <header>
                <div className="containerHeader">
                    <h1 className="titulo"><a href="#">TODO MODA</a></h1>
                    <nav className="nav">
                        <a href="#">INICIO</a>
                        <a href="#">CONOCENOS</a>
                        <a href="#">HOMBRE</a>
                        <a href="#">MUJER</a>
                        <a href="#">CONTACTO</a>
                    </nav>
                </div>
            </header>
    )
}