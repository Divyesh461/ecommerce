import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Loader from './Components/Loader';


function SingleProduct() {

    const { id } = useParams()

    const [tabproduct, setTabproduct] = useState({})
    const [loadershow, setLoadershow] = useState(false)
    const [product, setProduct] = useState({})
    const getData = () => {
        setLoadershow(true)
        axios({
            method: 'get',
            url: `https://dummyjson.com/products/${id}`,
        })
            .then((response) => {
                setProduct(response.data)
                setLoadershow(false);
            });

    }

    console.log(product && product);

    useEffect(() => {
        getData();
    }, []);


    return (
        <>

            {loadershow && <Loader />}
            <Header />

            {product &&
                <>
                    {/* <h1>Your Id is :{id}</h1> */}
                    <div className='item'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <div className='item-product'>
                                        <img src={product.thumbnail} alt='' width={''} />
                                        <div className='d-flex align-items-start'>
                                            {
                                                tabproduct.map((item, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className='nav flex-column nav-pills me-3' id='tabs' role='tablist' aria-orientation='vertical'>
                                                                <button className="nav-link active" id="tabs" data-bs-toggle="pill" data-bs-target="#tabs" type="button" role="tab" aria-controls="tabs" aria-selected="true">{item.images}</button>
                                                            </div>
                                                            <div className="tab-content" id="tabs">
                                                                <div className="tab-pane fade show active" id="tabs" role="tabpanel" aria-labelledby="tabs" tabindex="0">fgvajkfvlasihdv</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className='product-info'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem nisi a odit nam praesentium delectus quaerat. Hic voluptatem laudantium modi quas quaerat corrupti! Neque temporibus fugiat iure quos nam?{product.description}</p>
                            <h2>{product.title}</h2>
                            <div className='price-head mb-3'>
                                <span className='product-price'><b>Price</b> : ${product.price}</span>
                                <span className='discount-price p-2'>{product.discountPercentage}% Discount</span>
                            </div>
                            <p>Brand : {product.brand}</p>
                            <p>stock : {product.stock}</p>
                            <h3>Category : {product.category}</h3>
                            <p><Rating
                                initialRating={4.5}
                                emptySymbol={<AiOutlineStar className='rating' />}
                                fullSymbol={<AiFillStar className='rating' />}
                                readonly
                            /></p>
                        </div>
                    </div>

                    <Footer />
                </>
            }
        </>
    )
}

export default SingleProduct