import React, { useEffect, useState } from 'react'
import Rating from 'react-rating';
import Header from './Components/Header';




import '../Demo.scss';

function Amazon() {

    const [products, setProducts] = useState();

    const getUser = () => {
        return fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((products) => setProducts(products.products));
    }
    console.log(products);

    useEffect(() => {
        getUser();
    }, []);



    return (

        <>
            <Header />

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
                                                <p className='w-100'><Rating/></p>
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