import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
               className="home__image" 
               src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
               alt=""
            />

            {/* Product id, title, price,rating, image */}
            <div className="home__row">
                <Product 
                    id="1"
                    title="this is the title"
                    price={12.12}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="2"
                    title="Apple iPhone 8 Plus (renovado), Totalmente desbloqueado, Gris espacial"
                    price={12.12}
                    rating={3}
                    image="data:image/webp;base64,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"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="3"
                    title="TCL 4K UHD Dolby Vision HDR Roku Smart TV), 65R625"
                    price={12.12}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/91ZrvnzneML._AC_SL1500_.jpg"
                />
                 <Product 
                    id="4"
                    title="this is the title"
                    price={12.12}
                    rating={3}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id="5"
                    title="Cable HDMI de alta velocidad AmazonBasics Pack de 1 Negro"
                    price={12.12}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61GUctqz0-L._AC_SX679_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="6"
                    title="Acer Aspire 5 Slim Laptop, 15.6 pulgadas Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4 GB DDR4, 128 GB SSD, teclado retroiluminado"
                    price={12.12}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                />
            </div>
            {/* Product */}


        </div>
    )
}

export default Home
