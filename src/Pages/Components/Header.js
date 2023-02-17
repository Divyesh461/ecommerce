import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../Assets/img/amazon.png'
import { FaAmazon } from 'react-icons/fa';

function Header() {
    return (
        <>
            <div>
                <div className='header-bar'>
                    <div className='row w-100'>
                        <div className='logobar col'>
                            <img className='logo' src={logo} alt="#" />
                            <FaAmazon color='#FFF' fontSize={'60px'}/>
                        </div>
                        <ul className='nav nav-pills ms-auto col p-0'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/api'>Api Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/api-1'>Api-1</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/api-2'>Api-2</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/amazon'>Amazon</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header