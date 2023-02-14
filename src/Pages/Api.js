import React from 'react'



function Api()  {

    const [title, setTitle] = React.useState(null);
    const [price, setPrice] = React.useState(null)

    const myApi = () => {
        return fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then(data => {
            const { products } = data.results[0];
            setTitle(products.title);
            setPrice(products.price);
        });
    },[]);

   


    React.useEffect(() => {
        fetch(hello)
        .then(results => results.json())
            .then(data => {
                const { products } = data.results[0];
                setTitle(products.title);
                setPrice(products.price);
            });
    }, []);



    return (
        <>
            <div>Api</div>

            <div>
                Name: {!title || !price ? 'No Api Found' : `${title} ${price}`}
            </div>

        </>
    )
}

export default Api