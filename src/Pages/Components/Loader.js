import React from 'react'
import ReactLoading from 'react-loading';
function Loader() {
    return (
        <>
            <div className='loader'>
                <ReactLoading type={'bars'} color={'#f06'} height={'200px'} width={'200px'} />
            </div>
        </>
    )
}

export default Loader