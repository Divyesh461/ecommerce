import React from 'react'
import Header from './Components/Header'


function Home() {
    return (

        <>

            <Header/>

            <main className='text-center'>

                <section id="hero1" className="hero">
                    <div className="inner">
                        <div className="copy">
                            <h1>Choice mountains bro</h1>
                            <p>Its like im actually there! But sitting at a computer. Wow, the future is intense!</p>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="inner">
                        <div className="copy">
                            <h1>Amazing copy!</h1>
                            <p>The words are like jumping out at me man! </p>
                        </div>
                    </div>
                </section>

                <section id="hero2" className="hero">
                    <div className="inner">
                        <div className="copy">
                            <h1>Dem some big ass caves</h1>
                            <p>You could probably fit in there ;)</p>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="inner">
                        <div className="copy">
                            <h1>An inspiring quote</h1>
                            <p>/-- file not found --/</p>
                        </div>
                    </div>
                </section>

            </main>

        </>

    )
}

export default Home