import React from 'react'
import "./Header.css"
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
    return (
        <nav className="navContainer">

            <div className="leftLogo">
                <Image alt="logo" src='assets/shared/desktop/logo.svg' height={10} width={130} />

            </div>

            <div className="middleList">

                <ul className="orderNav">
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/">HEADPHONES</Link></li>
                    <li><Link href="/">SPEAKERS</Link></li>
                    <li><Link href="/">EARPHONES</Link></li>
                </ul>

            </div>


            <div className="rightLogo">
                <Image alt="cart" src="/assets/shared/desktop/icon-cart.svg" height={10} width={40} />
            </div>



            <div className='right'>

            </div>



        </nav>
    )
}

export default Header
