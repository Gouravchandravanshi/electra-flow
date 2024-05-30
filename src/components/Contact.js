import React from 'react'
import evs3jpg from './assets/ev-s3.jpg'

const Contact = () => {
  return (
    <div>
         {/* <!-- -------------------- CONTACT ---------------- --> */}
     <section class="contact section" id="contact">
          <div class="contact__container container grid">
            <div class="contact__images">
                <div class="contact__orbe"></div>

                <div class="contact__img">
                    <img src={evs3jpg} alt=""/>
                </div>
            </div>

            <div class="contact__content">
                <div class="contact__data">
                    <span class="section__subtitle">Contact Us</span>
                    <h2 class="section__title">
                        Easy to Contact Us <span>.</span>
                    </h2>
                    <p class="contact__description">
                        Is there a problem finding your charger? Need a guide in buying first
                         charger? or need a consultation on issues? just contact us.
                    </p>
                </div>

                <div class="contact__card">
                    <div class="contact__card-box">
                        <div class="contact__card-info">
                            <i class='bx bxs-phone-call'></i>
                            <div>
                                <h3 class="contact__card-title">
                                    Call
                                </h3>
                                <p class="contact__card-description">
                                    022.321.165.19
                                </p>
                            </div>
                        </div>

                        <button class="button contact__card-button">
                            Call Now
                        </button>
                    </div>

                    <div class="contact__card-box">
                        <div class="contact__card-info">
                            <i class='bx bxs-message-rounded-dots'></i>
                            <div>
                                <h3 class="contact__card-title">
                                   Chat
                                </h3>
                                <p class="contact__card-description">
                                    022.321.165.19
                                </p>
                            </div>
                        </div>

                        <button class="button contact__card-button">
                            Chat Now
                        </button>
                    </div>

                    <div class="contact__card-box">
                        <div class="contact__card-info">
                            <i class='bx bxs-video'></i>
                            <div>
                                <h3 class="contact__card-title">
                                    Video Call
                                </h3>
                                <p class="contact__card-description">
                                    022.321.165.19
                                </p>
                            </div>
                        </div>

                        <button class="button contact__card-button">
                            Video Call Now
                        </button>
                    </div>

                    <div class="contact__card-box">
                        <div class="contact__card-info">
                            <i class='bx bxs-envelope'></i>
                            <div>
                                <h3 class="contact__card-title">
                                     Message
                                </h3>
                                <p class="contact__card-description">
                                    022.321.165.19
                                </p>
                            </div>
                        </div>

                        <button class="button contact__card-button">
                            Message Now
                        </button>
                    </div>
                </div>

            </div>
          </div>
     </section>
    </div>
  )
}

export default Contact