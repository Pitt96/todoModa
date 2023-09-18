import "../assets/css/footer.css"
export const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center text-lg-start border-top">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h2 className="text-uppercase">Todo Moda</h2>
                            <p>
                                Todo moda es una tienda de ropa para damas y caballeros con un excelente gusto en la moda, el buen vestir define la personalidad de cada persona, nosotros estamos para combinar el buen estilo con la elegancia, desde hace muchos años la marca número uno de Latinoamerica.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h2 className="text-uppercase fs-5">Mas de Todo Moda</h2>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Moda</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Belleza</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Living</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Compras</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h2 className="text-uppercase mb-0 fs-5">ENCUENTRANOS</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white">Chile</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Peru</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Mésico</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Argentina</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="text-center p-3"
                >
                    © 2020 Copyright:
                    <a className="text-white" href="#">TodoModa.com</a>
                </div>
            </footer>
    )
}