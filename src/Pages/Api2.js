import React, { useEffect, useState } from 'react'
import Header from './Components/Header';

function Api2() {

    const [founder, setFounder] = useState();

    const getFounder = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((founder) => setFounder(founder));
    }

    // console.log(founder);

    useEffect(() => {
        getFounder();
    }, []);

    return (
        <>
            {
                founder &&
                <>
                    <Header/>
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