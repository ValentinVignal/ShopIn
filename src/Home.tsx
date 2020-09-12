import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img
                className="home__image"
                src="https://cms.qz.com/wp-content/uploads/2017/08/ap_16153504028615-e1502469462533.jpg?quality=75&strip=all&w=1600&h=904"
                alt=""
            />
            <div className="home__row">
                <Product
                    id='123456'
                    title='Awesome book'
                    price={11.96}
                    rating={3}
                    image='https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.113'
                />
                <Product
                    id='1234567'
                    title='Laptop so cool'
                    price={1299.85}
                    rating={4}
                    image='https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-hero.png?context=bWFzdGVyfHJvb3R8ODQ4NDd8aW1hZ2UvcG5nfGgyMi9oOGYvMTA2NzQ1ODc3Mjk5NTAucG5nfDQzODYxOTc5ODA0MWJhZTQyYThjOTAzZjE0NDI2NWVjYjY5MjE3MGFiMWEzODhlN2UyMGUwNGZhMWRmOTJmNzg'
                />
            </div>
            <div className="home__row">
                <Product
                    id='345678'
                    title='Big TV HD'
                    price={839.50}
                    rating={5}
                    image='https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/q/a/qa65q80tawxxy_1.jpg'
                />
                <Product
                    id='456789'
                    title='Funny small aquarium'
                    price={125.25}
                    rating={2}
                    image='https://www.n30.com.sg/1615-thickbox_default/biorb-tube-35-mcr-cylindrical-aquarium-white.jpg'
                />
                <Product
                    id='567890'
                    title='Tennis Racquet'
                    price={150.00}
                    rating={5}
                    image="https://dks.scene7.com/is/image/GolfGalaxy/16HEDATS1PRXXXXXXTNN_Black?qlt=70&wid=1100&fmt=webp"
                />
            </div>
            <div className="home__row">
                <Product
                    id='678901'
                    title='Big pan to fry stuff'
                    price={48.90}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/61kr0Z8AvxL._AC_SX679_.jpg'
                />
            </div>

        </div>
    )
}

export default Home
