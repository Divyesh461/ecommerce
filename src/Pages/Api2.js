import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import Loader from './Components/Loader';

function Api2() {

    const [founder, setFounder] = useState();
    const [loadershow, setLoadershow] = useState(false);


    const getData = () => {
        setLoadershow(true)
        axios({
            method: 'get',
            url: 'https://dummyjson.com/products',
        })
            .then((response) => {
                setFounder(response.data.products)
                setLoadershow(false);
            });
    }

    // console.log(founder);

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {loadershow && <Loader />}

            <Header />
            {
                founder &&
                <>
                    <div>
                        {
                            founder.map((items, index) => {
                                return (
                                    <div key={index} className='api text-center'>
                                        <p>SR - {items.id}</p>
                                        <p>{items.userId}</p>
                                        <p>{items.title}</p>
                                        <p>{items.body}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }
        </>
    )
}

export default Api2