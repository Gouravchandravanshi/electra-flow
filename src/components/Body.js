import React from 'react'
import ev1jpeg from './assets/ev1.jpeg'
import ev3jpeg from './assets/ev3.jpeg'
import evs1jpg from './assets/ev-s1.jpg'
import ev4jpeg from './assets/ev4.jpeg'
import ev5jpeg from './assets/ev5.jpeg'


const Body = () => {
  return (
    <div>
         <section class="home section" id="home">
        <div class="home__container.container.grid">
            <div class="home__data">
                <h1 class="home__title">
                     <br/>Electric Vehicle Charging WITH RAINBOW <br/> 
                </h1>
                <p class="home__description">
                   <br/> "STAY CHARGED " with RAINBOW EV charging points across India...<br/>
                    Find the variety of Chargers that suit you very easily, 
                    forget all difficulties in finding a charger for you...
                </p>
                <form action="" className=" home__search">
                    <input type="search" placeholder="search by location..." className=" home__search--input"/>
                    <button class="button">Search</button>
                </form>

                <div class="home__value">
                    <div>
                        <h1 class="home__value-number">
                            9k <span>+</span>
                        </h1>
                        <span class="home__value-description">
                            Premium <br/> Product
                        </span>
                    </div>

                    <div>
                        <h1 class="home__value-number">
                            2k <span>+</span>
                        </h1>
                        <span class="home__value-description">
                            Happy <br/> Customer
                        </span>
                    </div>

                    <div>
                        <h1 class="home__value-number">
                            28k <span>+</span>
                        </h1>
                        <span class="home__value-description">
                            Awards <br/> Winning
                        </span>
                    </div>
                </div>
            </div>

            <div class="home__images">
                <div class="home__orbe"></div>
                <div class="home__img">
                    <img src={ev1jpeg} alt=""/>
                </div>
            </div>
        </div>
    </section>
    {/* logos section */}
    <section class="logos section">
         <div class="logos__container container grid">
            <div class="logos__img">
                <img src={evs1jpg} alt=""/>
            </div>
            <div class="logos__img">
                <img src={ev3jpeg} alt=""/>
            </div>
            <div class="logos__img">
                <img src={ev4jpeg} alt=""/>
            </div>
            <div class="logos__img">
                <img src={ev5jpeg} alt=""/>
            </div>
         </div>
    </section>
    </div>
  )
}

export default Body