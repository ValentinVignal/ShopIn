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
                    id='123456'
                    title='Awesome book'
                    price={11.96}
                    rating={3}
                    image='https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.113'
                />
            </div>
            <div className="home__row">
                <Product
                    id='123456'
                    title='Awesome book'
                    price={11.96}
                    rating={3}
                    image='https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.113'
                />
                <Product
                    id='123456'
                    title='Awesome book'
                    price={11.96}
                    rating={3}
                    image='https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.113'
                />
                <Product
                    id='123456'
                    title='Awesome book'
                    price={11.96}
                    rating={3}
                    image='https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.113'
                />
            </div>
            <div className="home__row">
                <Product
                    id='123456'
                    title='Awesome book'
                    price={11.96}
                    rating={3}
                    image='https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.113'
                />
            </div>

        </div>
    )
}

export default Home
