import React, { useState, useEffect } from "react";
import "../styles/layout/Index.css";
import "../styles/pages/IndexPage.css";
import NovedadItem from "../novedades/NovedadItem";
import axios from "axios";

const Index = (props) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    console.log("use effect");
    const cargarNovedades = async () => {
      setLoading(true);
      //const response=await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
      const response = await axios.get("http://localhost:3000/api/novedades");
      debugger;
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, []);

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
      <header className="header">
        <a href="logo" className="logo">
          {" "}
          <i className="fas fa-coffee"></i> Coffee Shop
        </a>

        <nav className="navbar">
          <div id="close-navbar" className="fas fa-times"></div>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            home
          </a>
          <a
            href="#nosotros"
            className={activeSection === "nosotros" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("nosotros")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            nosotros
          </a>
          <a
            href="#menu"
            className={activeSection === "menu" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("menu")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            menu
          </a>
          <a
            href="#novedades"
            className={activeSection === "novedades" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("novedades")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            novedades
          </a>
          <a
            href="#contacto"
            className={activeSection === "contacto" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contacto")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            contacto
          </a>
        </nav>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
        </div>
      </header>

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
            <div className="price">$1.000</div>
          </div>

          <div className="box">
            <img src="images/menu-2.png" alt="" />
            <h3>Cortado o macchiato</h3>
            <div className="price">$1.500</div>
          </div>

          <div className="box">
            <img src="images/menu-3.png" alt="" />
            <h3>Americano</h3>
            <div className="price">$2.000</div>
          </div>

          <div className="box">
            <img src="images/menu-4.png" alt="" />
            <h3>Café con leche</h3>
            <div className="price">$2.500</div>
          </div>

          <div className="box">
            <img src="images/menu-5.png" alt="" />
            <h3>Capuchino</h3>
            <div className="price">$3.000</div>
          </div>

          <div className="box">
            <img src="images/menu-6.png" alt="" />
            <h3>Café irlandés</h3>
            <div className="price">$3.500</div>
          </div>
        </div>
      </section>

      <section className="novedades" id="novedades">
        <h1 className="heading">novedades</h1>

        <div className="box-container">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            novedades.map((item) => (
              <NovedadItem
                key={item.id}
                title={item.titulo}
                subtitle={item.subtitulo}
                imagen={item.imagen}
                body={item.cuerpo}
              />
            ))
          )}
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

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
          </form>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <img src="images/footer-1.png" alt="" />
            <h3>direccion</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              quia aliquid velit quis et adipisci, doloremque officia
            </p>
          </div>

          <div className="box">
            <img src="images/footer-2.png" alt="" />
            <h3>E-mail</h3>
            <a href="mail" class="link">
              coffeeshop@gmail.com
            </a>
            <a href="mail" class="link">
              coffeeshop@gmail.com
            </a>
          </div>

          <div className="box">
            <img src="images/footer-3.png" alt="" />
            <h3>Llámenos</h3>
            <p>+54 351 222 3333</p>
          </div>

          <div className="box">
            <img src="images/footer-4.png" alt="" />
            <h3>Horarios de apertura</h3>
            <p>
              Lunes - Viernes: 8:00 - 23:00
              <br /> Sabados: 8:00 - 24:00
            </p>
          </div>
        </div>

        <div className="credit">
          created by <span>Emil&o</span> | all rights reserved!{" "}
        </div>
      </section>
    </>
  );
};

export default Index;
