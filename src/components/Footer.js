import React from 'react'

const Footer = () => {
  return (
          <footer class="footer section">
        <div class="footer__container container grid">
            <div>
                <a href="#" class="footer__logo">
                    Holux <i class='bx bxs-home-alt-2'></i>
                </a>
                <p class="footer__description w-56">
                Revolutionizing EV charging nationwide, weprioritize convenience and sustainability, fostering a seamless transition to electric transportation. 
                </p>
            </div>

            <div class="footer__content">
                 <div> 
                    <h3 class="footer__title">
                        Contact
                    </h3>

                    <ul class="footer__links">
                         {/* <li>
                            <a href="#" class="footer__link">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">Features</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">News & Blog</a>
                        </li>  */}
                    </ul>
                </div> 

                {/* <div>
                    <h3 class="footer__title">
                        Company
                    </h3>

                    <ul class="footer__links">
                        {/* <li>
                            <a href="#" class="footer__link">How We Work?</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">Capital</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">Security</a>
                        </li> */}
                    {/* </ul>
                </div> */}
                {/* <div>
                    <h3 class="footer__title">
                         Support
                    </h3>

                    <ul class="footer__links">
                        {/* <li>
                            <a href="#" class="footer__link">FAQs</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">Support center</a>
                        </li>
                        <li>
                            <a href="#" class="footer__link">Contact Us</a>
                        </li> */}
                    {/* </ul>
                </div> */} 

                {/* <div>
                    <h3 class="footer__title">
                       Follow us
                    </h3>

                    <ul class="footer__social">
                        <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                            <i class='bx bxl-facebook-circle'></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                            <i class='bx bxl-instagram-alt'></i> 
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" class="footer__social-link">
                            <i class='bx bxl-pinterest'></i>
                        </a>
                    </ul>
                </div> */}
            </div>
        </div>

        <div class="footer__info container">
            <span class="footer__copy">
                &#292626; Bedimcode. All rights reserved
            </span>

            <div class="footer__privacy">
                <a href="#">Terms & Agreement</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
</footer>

  )
}

export default Footer
