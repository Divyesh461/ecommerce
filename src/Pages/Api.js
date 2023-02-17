import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Loader from './Components/Loader';

function Api() {

    const [getproducts, setgetProducts] = useState();
    const [loadershow, setLoadershow] = useState(false);

    // const getData = () => {
    //     setLoadershow(true)
    //     return fetch('https://dummyjson.com/products')
    //         .then((response) => response.json())
    //         .then((data) => setData(data.products));
    //     setLoadershow(false);

    // }

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
    // console.log(data);

    useEffect(() => {
        getData();
    }, []);

    return (

        <>
            {loadershow && <Loader />}
            
            <Header />

            {getproducts &&
                <>

                    <div>
                        {
                            getproducts.map((items, index) => {
                                return (
                                    <div key={index} className='api'>
                                        <span>{items.id}</span>
                                        <h4>{items.title}</h4>
                                        <h6>CateGory = {items.category}</h6>
                                        <p>{items.description}</p>
                                        <span>{items.price}</span>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <Footer />
                </>
            }
        </>
    )
}

export default Api