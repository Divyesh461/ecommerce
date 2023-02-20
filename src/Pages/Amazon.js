import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import '../Demo.scss';
import Loader from './Components/Loader';
import axios from 'axios';
import Footer from './Components/Footer';
import { Link } from 'react-router-dom';



function Amazon() {




    const handleClick = (c) => {
        (c).preventDefault();
        console.log('The link was clicked.');
    }


    const [getproducts, setgetProducts] = useState();
    const [loadershow, setLoadershow] = useState(false);
    const [input, setInput] = useState();

    const getData = () => {
        setLoadershow(true)
        axios({
            method: 'get',
            url: 'https://dummyjson.com/products',
        })
            .then((response) => {
                setgetProducts(response.data.products)
                setLoadershow(false);
            });
    }
    // console.log();


    useEffect(() => {
        getData();
    }, []);
    return (

        <>
            {loadershow && <Loader />}

            <Header />



            <div className='d-block text-center'>
                <input className='border rounded p-3 text-white bg-dark' value={input} onInput={e => setInput(e.target.value)} />
            </div>

            {getproducts &&
                <>
                    <section className='amazon'>
                        <div className='container'>
                            <div className='row'>
                                {
                                    getproducts.map((items, index) => {
                                        return (
                                            <div key={index} onClick={handleClick} className='col-md-3'>
                                                <div className=' amazon_products products'>
                                                    <img className='img_item' src={items.thumbnail} alt="no found" />
                                                    <div className='product_info'>
                                                        <h4>{items.title}</h4>
                                                        <div className='m-0'>
                                                            <p className='discount_price m-0'>{items.discountPercentage}%off</p>
                                                            <span>Deal of the day</span>
                                                            {/* <img src={items.images[]} alt="" /> */}
                                                        </div>
                                                        <div className='d-inline-block'>
                                                            <span className='whole_price'>${items.price}<sup>00</sup></span>
                                                            <span className='mrp_price'>M.R.P.:<del>${items.price}</del></span>
                                                        </div>
                                                        <h5>
                                                            <Link to={`/amazon/${items.id}`}>Buy Now</Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>

                    <Footer />
                </>
            }
        </>
    )
}

export default Amazon