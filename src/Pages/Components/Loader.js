import React, { useState } from 'react'

import ReactLoading from 'react-loading';



function Loader() {

    const Loader = ({ type, color }) => useState();

    return (

        <>
            <div className='loader'>
                <ReactLoading type={'bubbles'} color={'#FFBC06'} height={'200px'} width={'200px'} />
            </div>
        </>
    )
}

export default Loader