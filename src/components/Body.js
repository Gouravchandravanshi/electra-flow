import React from 'react'

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
                    <img src="Startup/Image/ev1.jpeg" alt=""/>
                </div>
            </div>
        </div>
    </section>
    {/* logos section */}
    <section class="logos section">
         <div class="logos__container container grid">
            <div class="logos__img">
                <img src="././utils.ev-s1" alt=""/>
            </div>
            <div class="logos__img">
                <img src="Startup/Image/ev3.jpeg" alt=""/>
            </div>
            <div class="logos__img">
                <img src="Startup/Image/ev4.jpeg" alt=""/>
            </div>
            <div class="logos__img">
                <img src="Startup/Image/ev5.jpeg" alt=""/>
            </div>
         </div>
    </section>
    </div>
  )
}

export default Body