import React from 'react'

const Header = () => {
  return (
    <div className='my-component'>
       <header className="header " id="header">
        <nav className="nav container ">
            <a href="#" className="nav__logo">
                Holux <i className='bx bxs-home-alt-2'></i>
            </a>

            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item ">
                        <a href="#Home" className="nav__link active-link">
                            <i className='bx bxs-home-alt-2' ></i>
                            <span>Home</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#popular" className="nav__link">
                            <i className='bx bx-building-house' ></i>
                            <span>Our Product</span>
                        </a>
                    </li>

                    {/* <li className="nav__item">
                        <a href="#value" className="nav__link">
                            <i className='bx bx-award' ></i>
                            <span>Value</span>
                        </a>
                    </li> */}

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className='bx bx-phone'></i>
                            <span>Contact</span>
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#Aboutus" className="nav__link">
                            <i className='bx bx-phone'></i>
                            <span>
                                About Us
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#Beapartner" className="nav__link">
                            <i className='bx bx-phone'></i>
                            <span>
                                Be a Partner
                            </span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#Ourteam" className="nav__link">
                            <i className='bx bx-phone'></i>
                            <span>
                                Our team
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            <i className='bx bx-moon change-theme' id="theme-button"></i>

            {/* <a href="#" className="button nav__button">
                Subscribe
            </a> */}
        </nav>
    </header>
    </div>
  )
}

export default Header
