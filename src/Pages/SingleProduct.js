import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Components/Footer'

import Header from './Components/Header'


function SingleProduct() {

    const { id } = useParams()
    console.log(id);
    // const thisProduct `` = axios.url.find(prod => prod.id === productId)

    return (
        <>
            <Header />
            your expected id : {id}
            <Footer />
        </>
    )
}

export default SingleProduct