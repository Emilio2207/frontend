const ContactoPage = (props) => {
    return (
<>
<section className="contacto" id="contacto">

<h1 className="heading">Contáctenos</h1>

<div className="row">

    <div className="image">
        <img src="images/contact.png" alt=""/>
    </div>

    <form action="">
        <h3>Ponete en contacto</h3>

        <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="nombre"/>
        </div>

        <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email"/>
        </div>

        <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="tel"/>
        </div>

        <div className="inputBox">
            <span className="fas fa-envelope-open-text"></span>
            <input type="text" placeholder="mensaje"/>
            <textarea name=""></textarea>
        </div>

        <input type="submit" value="enviar mensaje" className="btn"/>

    </form>

</div>

</section>
</>
    );
}

export default ContactoPage;