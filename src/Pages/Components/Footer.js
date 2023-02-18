import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>

            <footer className="text-center text-white footer" >
                <div className="container">
                    <section className="mt-5">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link className="text-white">About us</Link>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link className="text-white">Products</Link>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link className="text-white">Awards</Link>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link className="text-white">Help</Link>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link className="text-white">Contact</Link>
                                </h6>
                            </div>
                        </div>
                    </section>

                    <hr className="my-5" />

                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    distinctio earum repel`lat quaerat voluptatibus placeat nam,
                                    commodi optio pariatur est quia magnam eum harum corrupti
                                    dicta, aliquam sequi voluptate quas.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center mb-5">
                        <Link className="text-white me-4">
                            {/* <AiFillFacebook/> */}
                        </Link>
                        <Link className="text-white me-4">  
                            {/* <AiOutlineWhatsApp /> */}
                        </Link>
                        <Link className="text-white me-4">
                            {/* <BsTwitter /> */}
                        </Link>
                        <Link className="text-white me-4">
                            {/* <AiOutlineWhatsApp /> */}
                        </Link>
                        <Link className="text-white me-4">
                            {/* <BsTwitter /> */}
                        </Link>
                        <Link className="text-white me-4">
                            {/* <AiFillFacebook /> */}
                        </Link>
                    </section>
                </div>

                <div className="text-center p-3">
                    © 2020 Copyright:
                    <Link className="text-white"> W.BootCamp Idea</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer