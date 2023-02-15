import React, { useEffect, useState } from 'react'
import Header from './Components/Header';

function Api1() {

    const [user, setUser] = useState();

    const getUser = () => {
        return fetch('https://dummyjson.com/todos')
            .then((response) => response.json())
            .then((user) => setUser(user.todos));
    }

    // console.log(user);

    useEffect(() => {
        getUser();
    }, []);


    return (

        <>
            <Header/>

            {user &&
                <>
                    <div>
                        {
                            user.map((items, index) => {
                                return (
                                    <div key={index} className='api'>
                                        <p>{items.id}</p>
                                        <p>{items.todo}</p>
                                        <p>{items.completed}</p>
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

export default Api1