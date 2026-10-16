"use client"
import React from 'react'
import Image from 'next/image'
import './Banner.css'

const Banner = () => {
    return (
        <div className="bannerContainer">

            <div className="bannerLeft">

                <h2> New Product</h2>


                <h1>XX99 MARK ll <br /> HEADPHONES</h1>

                <p>Experience natural, lifelike audio and exceptional
                    build quality made for the passionate music enthusiast
                </p>



                <button> SEE PRODUCT </button>
            </div>

            <div className="bannerRight">

                {/* <img
                    src="/assets/home/desktop/image-hero.jpg"
                    alt="headphones"
                /> */}

            </div>


        </div>
    )
}

export default Banner
