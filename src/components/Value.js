import React from 'react'

const Value = () => {
  return (
    <div>
             {/* <!-- ============ VALUE ================== --> */}
     <section class="value-section" id="value">
         <div class="value__container container grid">
            <div class="value__images">
                <div class="value__orbe"></div>

                <div class="value__img">
                    <img src="Startup/Image/ev-s1.jpg" alt=""/>
                </div>
            </div>

            <div class="value__content">
                <div class="value__data">
                    <span class="section__subtitle">Our Value</span>
                    <h2 class="section__title">
                        Value We Give To You <span>.</span>
                    </h2>

                    <p class="value__description">
                        We always ready to help by providing the best service for you,
                        We believe good Chargers to charge your vehicle can make your service better...
                    </p>
                </div>

                <div class="value__accordion">
                    <div class="value__accordion-item">
                        <header class="value__accordion-header">
                            <i class='bx bxs-shield-x value__accordion-icon'></i>
                            <h3 class="value__accordion-title">
                                Best interest rates on the market
                            </h3>
                              <div class="value__accordion-arrow">
                                <i class='bx bxs-down-arrow'></i>
                              </div>   
                        </header>

                        <div class="value__accordion-content">
                            <p class="value__accordion-description">
                                Price We Provide is the best for you,
                                We guarantee no price changes on your Charger due 
                                to various unexpected costs that may come.
                            </p>
                        </div>
                    </div>

                    <div class="value__accordion-item">
                        <header class="value__accordion-header">
                            <i class='bx bxs-x-square'></i>
                            <h3 class="value__accordion-title">
                                Prevent unstable prices

                            </h3>
                              <div class="value__accordion-arrow">
                                <i class='bx bxs-down-arrow'></i>
                              </div>   
                        </header>

                        <div class="value__accordion-content">
                            <p class="value__accordion-description">
                                Price We Provide is the best for you,
                                We guarantee no price changes on your Charger due 
                                to various unexpected costs that may come.
                            </p>
                        </div>
                    </div>

                    <div class="value__accordion-item">
                        <header class="value__accordion-header">
                            <i class='bx bxs-bar-chart-square'></i>
                            <h3 class="value__accordion-title">
                                Best Prices on the market 
                            </h3>
                              <div class="value__accordion-arrow">
                                <i class='bx bxs-down-arrow'></i>
                              </div>   
                        </header>

                        <div class="value__accordion-content">
                            <p class="value__accordion-description">
                                Price We Provide is the best for you,
                                We guarantee no price changes on your Charger due 
                                to various unexpected costs that may come.
                            </p>
                        </div>
                    </div>

                    <div class="value__accordion-item">
                        <header class="value__accordion-header">
                            <i class='bx bxs-check-square'></i>
                            <h3 class="value__accordion-title">
                                Security of your data  
                            </h3>
                              <div class="value__accordion-arrow">
                                <i class='bx bxs-down-arrow'></i>
                              </div>   
                        </header>

                        <div class="value__accordion-content">
                            <p class="value__accordion-description">
                                Price We Provide is the best for you,
                                We guarantee no price changes on your Charger due 
                                to various unexpected costs that may come.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     </section>
    </div>
  )
}

export default Value