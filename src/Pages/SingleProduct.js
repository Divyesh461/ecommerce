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

    const [tab_img, setTab_img] = useState({})
    const [loadershow, setLoadershow] = useState(false);
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
                                        <img src={product.thumbnail} alt="" width={''} />
                                        {/* {
                                            tab_img.map((item, index) => {
                                                return (
                                                    <div key={index} class="d-flex align-items-start">
                                                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                                                            <button class="nav-link" id="v-pills-profile-tab1" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                                                            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                                                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                                                        </div>
                                                        <div class="tab-content" id="v-pills-tabContent">
                                                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">as...</div>
                                                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab1" tabindex="0">..asdasdasd.</div>
                                                            <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">.sdsdadas asd asd..</div>
                                                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">.sdfgdfgdf1d3245..</div>
                                                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">.dsfsfsdfsd8f987987asdf89798..</div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        } */}
                                        <img src={product.images} alt="" />
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
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            }
        </>
    )
}

export default SingleProduct