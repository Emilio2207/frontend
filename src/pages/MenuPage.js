const MenuPage = (props) => {
    return (
    <>
    <section className="menu" id="menu">

        <h1 className="heading">menu</h1>

        <div className="box-container">

        <div className="box">
        <img src="images/menu-1.png" alt=""/>
        <h3>Café Espresso</h3>
        <div className="price">$100</div>
        </div>

    <div className="box">
        <img src="images/menu-2.png" alt=""/>
        <h3>Cortado o macchiato</h3>
        <div className="price">$150</div>
    </div>

    <div className="box">
        <img src="images/menu-3.png" alt=""/>
        <h3>Americano</h3>
        <div className="price">$200</div>
    </div>

    <div className="box">
        <img src="images/menu-4.png" alt=""/>
        <h3>Café con leche</h3>
        <div className="price">$250</div>
    </div>

    <div className="box">
        <img src="images/menu-5.png" alt=""/>
        <h3>Capuchino</h3>
        <div className="price">$300</div>
    </div>

    <div className="box">
        <img src="images/menu-6.png" alt=""/>
        <h3>Café irlandés</h3>
        <div className="price">$350</div>
    </div>

    </div>

    </section>
    </>
    );
}

export default MenuPage;