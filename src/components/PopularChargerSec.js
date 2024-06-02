import React from 'react'
import ev10jpeg from './assets/ev10.jpeg'
import ev11jpeg from './assets/ev11.jpeg'
import ev12jpeg from './assets/ev12.jpeg'
import evs1jpg from './assets/ev-s1.jpg'
import evs2jpg from './assets/ev-s2.jpg'
import evs3jpg from './assets/ev-s3.jpg'
import evs4jpg from './assets/ev-s4.jpg'
import ev13jpg from './assets/ev13.jpeg'
const PopularChargerSec = () => {
  return (
    <div>
        <section class="popular section" id="popular">
        <div class="container">
            <span class="section__subtitle">Best Choise</span>
            <h2 class="section__title">
                Our Product<span>.</span>
            </h2>

            <div class="popular__container swiper">
                <div class="swiper-wrapper">
                    <article class="popular__card swiper-slide">
                         <img src={ev10jpeg} alt="" class="popular__img"/>

                         <div class="popular__data">
                           
                            <h3 class="popular__titlr">
                                EV charger
                            </h3>
                            <p class="Popular__description">
                                Developing smart, safe & robust EV Charging
                                 Network for all category of EV & Charging Protocols.
                            </p>
                         </div>
                    </article>

                    <article class="popular__card swiper-slide">
                        <img src={ev11jpeg} alt="" class="popular__img"/>

                        <div class="popular__data">
                           
                           <h3 class="popular__titlr">
                            EV Chargers
                           </h3>
                           <p class="Popular__description">
                               Developing smart, safe & robust EV Charging
                                Network for all category of EV & Charging Protocols.
                           </p>
                        </div>
                   </article>

                   <article class="popular__card swiper-slide">
                    <img src={ev12jpeg} alt="" class="popular__img"/>

                    <div class="popular__data">
                       
                       <h3 class="popular__titlr">
                        EV Chargers
                       </h3>
                       <p class="Popular__description">
                           Developing smart, safe & robust EV Charging
                            Network for all category of EV & Charging Protocols.
                       </p>
                    </div>
               </article>

               <article class="popular__card swiper-slide">
                <img src={evs1jpg} alt="" class="popular__img"/>

                <div class="popular__data">
                   
                   <h3 class="popular__titlr">
                    EV Chargers
                   </h3>
                   <p class="Popular__description">
                       Developing smart, safe & robust EV Charging
                        Network for all category of EV & Charging Protocols.
                   </p>
                </div>
           </article>

           <article class="popular__card swiper-slide">
            <img src={evs2jpg} alt="" class="popular__img"/>

            <div class="popular__data">
               
               <h3 class="popular__titlr">
                EV Chargers
               </h3>
               <p class="Popular__description">
                   Developing smart, safe & robust EV Charging
                    Network for all category of EV & Charging Protocols.
               </p>
            </div>
       </article>

       <article class="popular__card swiper-slide">
        <img src={evs3jpg} alt="" class="popular__img"/>

        <div class="popular__data">
           
           <h3 class="popular__titlr">
            EV Chargers
           </h3>
           <p class="Popular__description">
               Developing smart, safe & robust EV Charging
                Network for all category of EV & Charging Protocols.
           </p>
        </div>
   </article>

   <article class="popular__card swiper-slide">
    <img src={evs4jpg} alt="" class="popular__img"/>

    <div class="popular__data">
       
       <h3 class="popular__titlr">
        EV Chargers
       </h3>
       <p class="Popular__description">
           Developing smart, safe & robust EV Charging
            Network for all category of EV & Charging Protocols.
       </p>
    </div>
</article>

               <article class="popular__card swiper-slide">
                <img src={ev13jpg} alt="" class="popular__img"/>

                <div class="popular__data">
                   
                   <h3 class="popular__titlr">
                    Ev Chargers
                   </h3>
                   <p class="Popular__description">
                       Developing smart, safe & robust EV Charging
                        Network for all category of EV & Charging Protocols.
                   </p>
                </div>
           </article>
                </div>
                <div class="swiper-button-next">
                    <i class='bx bx-chevron-right'></i>
                </div>
                 <div class="swiper-button-prev">
                    <i class='bx bx-chevron-left'></i>
                 </div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default PopularChargerSec