import "../styles/pages/IndexPage.css";
import { useState } from "react";
import axios from "axios";

const IndexPage = (props) => {
  const initialFrom = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFromData] = useState(initialFrom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((oldData) => ({
      ...oldData,
      [name]: value, // forma dinamica
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/contacto`,
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFromData(initialFrom);
    }
  };

  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            Descubre el <br /> sabor real del café{" "}
          </h3>
          <a href="btn" className="btn">
            Ordena ahora
          </a>
        </div>
      </section>

      <h1 className="heading">nosotros</h1>

      <section className="nosotros" id="nosotros">
        <div className="row">
          <div className="image">
            <img src="images/about.jpg" alt="nosotros" />
          </div>

          <div className="content">
            <h3>¿Qué hace que nuestro café sea especial?</h3>
            <div className="line"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              debitis alias veritatis exercitationem quo, laudantium dolorem
              quas nesciunt ipsam provident corporis, tenetur facere rerum dolor
              non? Fugiat eius maxime aperiam!
            </p>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <h1 className="heading">menu</h1>

        <div className="box-container">
          <div className="box">
            <img src="images/menu-1.png" alt="" />
            <h3>Café Espresso</h3>
            <div className="price">$100</div>
          </div>

          <div className="box">
            <img src="images/menu-2.png" alt="" />
            <h3>Cortado o macchiato</h3>
            <div className="price">$150</div>
          </div>

          <div className="box">
            <img src="images/menu-3.png" alt="" />
            <h3>Americano</h3>
            <div className="price">$200</div>
          </div>

          <div className="box">
            <img src="images/menu-4.png" alt="" />
            <h3>Café con leche</h3>
            <div className="price">$250</div>
          </div>

          <div className="box">
            <img src="images/menu-5.png" alt="" />
            <h3>Capuchino</h3>
            <div className="price">$300</div>
          </div>

          <div className="box">
            <img src="images/menu-6.png" alt="" />
            <h3>Café irlandés</h3>
            <div className="price">$350</div>
          </div>
        </div>
      </section>

      <section className="novedades" id="novedades">
        <h1 className="heading">novedades</h1>

        <div className="box-container">
          <div className="box">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p>
              Descripcio - Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Corrupti facilis debitis cumque, eos fuga nesciunt minima
              accusamus nostrum aperiam sed.
            </p>
          </div>

          <div className="box">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p>
              Descripcio - Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Corrupti facilis debitis cumque, eos fuga nesciunt minima
              accusamus nostrum aperiam sed.
            </p>
          </div>

          <div className="box">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p>
              Descripcio - Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Corrupti facilis debitis cumque, eos fuga nesciunt minima
              accusamus nostrum aperiam sed.
            </p>
          </div>
        </div>
      </section>

      <section className="contacto" id="contacto">
        <h1 className="heading">Contáctenos</h1>

        <div className="row">
          <div className="image">
            <img src="images/contact.png" alt="" />
          </div>

          <form action="/contacto" method="post" onSubmit={handleSubmit}>
            <h3>Ponete en contacto</h3>

            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="nombre"
              />
            </div>

            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
              />
            </div>

            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input
                type="number"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="tel"
              />
            </div>

            <div className="inputBox">
              <span className="fas fa-envelope-open-text"></span>
              <input type="text" placeholder="mensaje" />
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            <input type="submit" value="enviar mensaje" className="btn" />
          </form>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
        </div>
      </section>
    </>
  );
};

export default IndexPage;
