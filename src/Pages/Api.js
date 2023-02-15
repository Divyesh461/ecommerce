import React, { useEffect, useState } from 'react'
import Header from './Components/Header';

function Api() {

    const [data, setData] = useState();

    const getData = () => {
        return fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => setData(data.products));
    }
    // console.log(data);

    useEffect(() => {
        getData();
    }, []);

    return (

        <>{data &&
            <>
                <Header/>
                <div>
                    {
                        data.map((items, index) => {
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
            </>
        }
        </>
    )
}

export default Api