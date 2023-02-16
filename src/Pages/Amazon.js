import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import Header from './Components/Header';




import '../Demo.scss';
import Loader from './Components/Loader';

function Amazon() {

    const{LoaderShow , setLoaderShow} = useState(false);


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const [input, setInput] = useState();

    const [products, setProducts] = useState();

    const getUser = () => {
        return fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((products) => setProducts(products.products));
        
        },
        
        // console.log(products);
        setTimeout = () => {
            setLoaderShow=(false);
        }
        
        useEffect(() => {
            getUser();
        }, []);
        
    console.log(input);

    return (

        <>
            { LoaderShow && <Loader /> }

            <Header />


            <div className='d-block text-center'>
                <input className='border rounded p-3 text-white bg-dark' value={input} onInput={e => setInput(e.target.value)} />
            </div>


            {products &&
                <>
                    <section className='amazon'>
                        <div className='container'>
                            <div className='row'>
                                {
                                    products.map((items, index) => {
                                        return (
                                            <div key={index} className='col-md-4 amazon_products products'>
                                                <img className='img_item' src={items.thumbnail} alt="no found" />
                                                <h4>{items.title}</h4>
                                                <div className='d-inline-flex justify-content-between w-100'>
                                                    <p>${items.price}</p>
                                                    <p>{items.discountPercentage}%</p>
                                                </div>
                                                <p className='w-100'>
                                                    <ReactStars
                                                        count={5}
                                                        onChange={ratingChanged}
                                                        size={36}
                                                        isHalf={true}
                                                        emptyIcon={<i className="far fa-star"></i>}
                                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                        fullIcon={<i className="fa fa-star"></i>}
                                                        activeColor="#FFBC06"
                                                    />
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default Amazon