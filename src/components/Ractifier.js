import React from 'react'

const Ractifier = (props) => {
  return (
    <div>
      <section class="popular section" id="popular">
        <div class="container">
            
            
            <h3>Ractifier</h3>
            <div class="popular__container swiper">
            <div class="swiper-wrapper overflow-x-scroll">

            {props.details.map((value, index)=>(
                
                
                    <article class="popular__card swiper-slide">
                         <img src={value.image} alt="" class="popular__img"/>

                         <div class="popular__data" key={index}>
                           
                            <h3 class="popular__titlr">
                                {value.heading}
                            </h3>
                            <p class="Popular__description">
                                {value.description}
                            </p>
                         </div>
                    </article>
                    
            ))}

            
                {/* <div class="swiper-button-next">
                    <i class='bx bx-chevron-right'></i>
                </div>
                 <div class="swiper-button-prev">
                    <i class='bx bx-chevron-left'></i>
                 </div> */}

         </div>
            

        </div>
        </div>
     </section>
    </div>
  )
}

export default Ractifier
