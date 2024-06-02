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
                     <br/>Electric Vehicle Charging With Electra-Flow <br/> 
                </h1>
                <p class="home__description">
                   <br/> "STAY CHARGED " with Electra-Flow EV charging points across India...<br/>
                    Find the variety of Chargers that suit you very easily, 
                    forget all difficulties in finding a charger for you...
                </p>
                <form action="" className=" home__search">
                    <input type="search" placeholder="search by location..." className=" home__search--input"/>
                    <button class="button">Search</button>
                </form>

                
            </div>

            <div class="home__images">
                <div class="home__orbe"></div>
                <div class="home__img">
                    <img src={ev1jpeg} alt=""/>
                </div>
            </div>
        </div>
    </section>
    
    
    </div>
  )
}

export default Body