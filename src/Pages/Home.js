import React, { useRef } from 'react'
import { useState, useEffect } from 'react';

function Home() {

    // const [color] = useState("red");

    // const [brand, setBrand] = useState("Ford");
    // const [model, setModel] = useState("Mustang");
    // const [year, setYear] = useState("1964");
    // const [color, setColor] = useState("red");

    // const [car, setCar] = useState({
    //     brand: 'BMW',
    //     model: 'X1',
    //     color: 'red',
    //     year: 2012
    // })

    // const updateCar = () => {
    //     setCar(previousState => {
    //         return { ...previousState, color: 'blue', year: '2000', brand: 'LExus', model: 'Xc-90' }
    //     })
    // }

    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(() => count + 1);
    //     }, 1000);
    // })

    // const [count1, setCount1] = useState(0);
    // const [calc, setCalc] = useState(0);

    // useEffect(() => {
    //     setCalc(() => count1 * 2);
    // }, [count1]);



    // const [inputValue, setInputValue] = useState("");
    // const count = useRef(0);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // });


    // const inputElement = useRef();

    // const focusInput = () => {
    //     inputElement.current.focus();
    // };


    // const handleSubmit = event => {
    //     event.preventDefault();
    //     alert('You have submitted the form.')
    // }





    return (
        <>

        

{/* 
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>
                            <p>Name</p>
                            <input className='rounded-pill border-success w-100' name="name" />
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div> */}




            {/* <h1>My favorite color is {color}!</h1> */}
            {/* <button className='btn btn-dark'>button</button> */}

            {/* <h2>My Car Name Is {model}</h2>

            <p>My Car Brand  is {brand} {model} and buy in {year}</p> */}

            {/* <h1>This {car.brand} model {car.model} color is {car.color} and manufacture in {car.year}</h1>
            <button className='btn btn-primary' onClick={updateCar}>Lexus Car</button> */}

            {/* <h2>You Spent {count} seconds here.</h2> */}

            {/* <p>Count: {count1}</p>
            <button className='btn btn-dark' onClick={() => setCount1((c) => c + 1)}> +</button>
            <p>Calculation: {calc}</p> */}

            {/* <input
                className='bg-dark text-white border-pill m-3 p-2'
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Key Count which use in  area: {count.current}</h1> */}


            {/* <div className='d-flex p-0 m-5 align-items-center'>
                <div>
                    <input type="text" ref={inputElement} className='p-2 border-success border' />
                </div>
                <textarea type="text" />
                <textarea type="text" />
                <button className='btn btn-dark' onClick={focusInput}>Focus Input</button>
            </div> */}

        </>

    )
}

export default Home