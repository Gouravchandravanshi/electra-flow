import React, { useState } from 'react'
import SideNav from './SideNav'
import ev1jpeg from './assets/ev1.jpeg'
import ev3jpeg from './assets/ev3.jpeg'
import evs1jpg from './assets/ev-s1.jpg'
import ev4jpeg from './assets/ev4.jpeg'
import ev5jpeg from './assets/ev5.jpeg'


const Body = ({}) => {
    const [visible, setvisible] = useState(false);
    const handleonclick = ()=>{
        setvisible(!visible);
        console.log(visible);
    }
  return (
    <div className='flex'>
    <div className='fixed z-50 w-72'>
    <SideNav visible = {visible} setvisible={setvisible}/>
    </div>
         
         <section className="home section min-w-full" id="home">
        <div className="home__container.container.grid">
            <div className="home__data">
                <h1 className="home__title">
                <div className='' onClick={handleonclick}>
                <img className='w-10 hamburger' src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg" alt="" />
                </div>
                
                     <br/>Electric Vehicle Charging With Electra-Flow <br/> 
                </h1>
                <p className="home__description">
                   <br/> "STAY CHARGED " with Electra-Flow EV charging points across India...<br/>
                    Find the variety of Chargers that suit you very easily, 
                    forget all difficulties in finding a charger for you...
                </p>
                <form action="" className=" home__search">
                    <input type="search" placeholder="search by location..." className=" home__search--input"/>
                    <button className="button">Search</button>
                </form>

                
            </div>

            <div className="home__images">
                <div className="home__orbe"></div>
                <div className="home__img">
                    <img src={ev1jpeg} alt=""/>
                </div>
            </div>
        </div>
    </section>
    
    
    </div>
  )
}

export default Body