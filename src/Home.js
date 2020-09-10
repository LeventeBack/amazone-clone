import React from 'react'
import "./Home.css"
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
                <div className="home__row">
                    <Product
                        id={4}
                        title="JBL Boombox 2, Bluetooth, 80W, Powerbank, PartyBoost, Waterproof"
                        price={399.95}
                        image="./images/jbl.png"
                        rating={4}
                    />
                    <Product
                        id={2}
                        title='APPLE MacBook Pro 16" Retina Display, Intel Core i9, 16GB, 1TB, AMD Radeon Pro 5500M 4GB, macOS Catalina'
                        price={1099.75}
                        image="./images/macbook.png"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={1}
                        title="Sony WH-XB900N, Bluetooth, NFC, Over-Ear, Microfon, Noise Cancelling"
                        price={178.99}
                        image="./images/sony.jpg"
                        rating={4}
                    />
                    <Product
                        id={3}
                        title="XIAOMI Mi Band 4, Android/iOS, black, Full color AMOLED Display"
                        price={178.99}
                        image="./images/miband.jpg"
                        rating={4}
                    />
                    <Product
                        id={5}
                        title="XIAOMI Redmi Note 8T, 64GB, 4GB RAM, Dual SIM, Moonshadow Grey"
                        price={215.25}
                        image="./images/xiaomi.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={6}
                        title='Kogan 49" Curved 32:9 Super Ultrawide 144Hz HDR Monitor (3840 x 1080), 1ms, FreeSync, High Dynamic Range, Arena Lighting, Picture-by-Picture mode '
                        price={949.99}
                        image="./images/monitor.png"
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home

