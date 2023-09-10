const Footer = (props) => {
    return (
        <>
        <section className="footer">

        <div className="box-container">

        <div className="box">
        <img src="images/footer-1.png" alt=""/>
        <h3>direccion</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quia aliquid velit quis et adipisci, doloremque officia</p>

        </div>

        <div className="box">
        <img src="images/footer-2.png" alt=""/>
        <h3>E-mail</h3>
        <a href="mail" class="link">coffeeshop@gmail.com</a>
        <a href="mail" class="link">coffeeshop@gmail.com</a>
        </div>

        <div className="box">
        <img src="images/footer-3.png" alt=""/>
        <h3>Llámenos</h3>
        <p>+54 351 222 3333</p>
        </div>

        <div className="box">
        <img src="images/footer-4.png" alt=""/>
        <h3>Horarios de apertura</h3>
        <p>Lunes - Viernes: 8:00 - 23:00
           <br/> Sabados: 8:00 - 24:00</p>
        </div>

        </div>

        <div className="credit">created by <span>Emil&o</span> | all rights reserved! </div>

        </section>
        </>
    );
}

export default Footer;