const Nav = (props) => {
    return (
        <>
        <nav className="navbar">
            <div id="close-navbar" className="fas fa-times"></div>
            <a href="#">home</a>
            <a href="#nosotros">nosotros</a>
            <a href="#menu">menu</a>
            <a href="#novedades">novedades</a>
            <a href="#contacto">contacto</a>
        </nav>
        </>
    );
}

export default Nav;