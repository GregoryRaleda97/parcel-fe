import React from 'react';
import './Parcel.css';
import { Link } from 'react-router-dom';
import Image from '../../assets/snackimage.jpg';

function Parcel() {
    return (
        <div>
            <div className="parcel-rows">
                <div className="parcel-banner-first">

                    <div className="parcel-first">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/product'>
                                    Syrups
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="parcel-second">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/product'>
                                    Juice
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="parcel-third">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/product'>
                                    Soft Drinks
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="parcel-banner-second">

                    <div className="parcel-first">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/product'>
                                    Chocolates
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="parcel-second">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/product'>
                                    Snacks
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="parcel-third">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/product'>
                                    Biscuits
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Parcel
