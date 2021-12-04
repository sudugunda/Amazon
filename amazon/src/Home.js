import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/71CcvjPcvUL._SX3000_.jpg"
                    alt="banner"
                />

                <div className="home__row">
                    
                    <Product 
                    title='The lean startup' 
                    price={29.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating={5}/>
                    <Product 
                    title='boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Olive Green)' 
                    price={29.99} 
                    image='https://m.media-amazon.com/images/I/61IZd8JAnWL._SY450_.jpg'
                    rating={4}/>
                    
                </div>
                <div className="home__row">
                <Product 
                    title='Samsung 28 L Convection Microwave Oven (CE1041DSB2/TL, Black, SlimFry)' 
                    price={29.99} 
                    image='https://m.media-amazon.com/images/I/81wx0ua+yCL._SX679_.jpg'
                    rating={4}/>

                <Product 
                    title='boAt Rockerz 255 Pro Bluetooth Wireless in…' 
                    price={29.99} 
                    image='https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg'
                    rating={3}/>

                <Product 
                    title='boAt Airdopes 121v2 Bluetooth Truly Wirele…' 
                    price={29.99} 
                    image='https://images-eu.ssl-images-amazon.com/images/I/41Q6QY85qlL._AC_SX184_.jpg'
                    rating={4}/>
                    
                </div>
                <div className="home__row">
                <Product 
                    title='Mivi Play Bluetooth Speaker with 12 Hours Playtime. Wireless Speaker Made in India with Exceptional Sound Quality, Portable and Built in Mic-Black' 
                    price={29.99} 
                    image='https://m.media-amazon.com/images/I/61UJnlIHF9S._AC_UL320_.jpg'
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
