import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (

        <>
            <div>
                <ul className='nav nav-pills'>
                    <li class='nav-item'>
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to='/api'>Api Product</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to='/api-1'>Api-1</Link>
                    </li>
                    <li class="nav-item">
                        <Link className='nav-link' to='api-2'>Api-2</Link>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Home