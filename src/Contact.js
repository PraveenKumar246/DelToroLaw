import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import facebook from './Homeimages/facebook.svg';
import instagram from './Homeimages/instagram1.svg';
import twitter from './Homeimages/twitter.svg';
import linkedin from './Homeimages/linkedin.svg';
import circle from './Homeimages/button(2).png'
import './contact.css';


function Contact(){
    return(
        <div id="contact"
        style={{
            background:"rgb(24, 23, 23)",
            backgroundSize: "cover",
            height: "113vh",
            color: "#f5f5f5",
            overflowX:"hidden"
        }}><div class='verticalLine'>
            <div className='home'>
              <ul><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
               <Link to='#intro' smooth className='sec1'>INTRO</Link><br/><br/>
               <Link to='#about' smooth className='sec1'>ABOUT&nbsp;US</Link><br/><br/>
               <Link to='#attorneys'smooth className='sec1'>MEET&nbsp;OUR&nbsp;ATTORNEYS</Link><br/><br/>
               <Link to='#practice'smooth className='sec1'>PRACTICE&nbsp;AREAS</Link><br/><br/>
               <Link to='#victories'smooth className='sec1'>OUR&nbsp;VICTORIES</Link><br/><br/>
               <Link to='#blogs'smooth className='sec1'>BLOGS</Link><br/><br/>
               <div className='circle'><img src={circle} alt="background"/><Link to='#contact' smooth className='sec'>CONTACT</Link></div>
              
              </ul>
              <div>
                 <h3 className='shoot'>SHOOT ME A MESSAGE</h3>
                 <input className='input0' type="text"  required placeholder="FIRST NAME*" pattern="[a-z][A-Z]"/><br/><br/><hr className='hr'></hr><br/><br/>
                 <input className='input1' type="email" required placeholder="EMAIL*" /><br/><br/><hr className='hr'></hr><br/>
                 <input className='input2' type="text" required placeholder="CASE DETAILS*" /><br/><br/><br/><br/><br/><hr className='hr1'></hr>
                 <button class="square11">
                    <h5 class="text">VIEW ALL</h5>
                 </button>
              </div>
              <div>
                 <input className='input3' type="text"  required placeholder="LAST NAME*" pattern="[a-z][A-Z]"/><br/><br/><hr className='hr2'></hr><br/><br/>
                 <input className='input4' type="tel" required placeholder="PHONE*" /><br/><br/><hr className='hr2'></hr>
              </div>
              <div className='squ'>

                    
              <div className='squa'>
                    <h5 className='tex05'>CONTACT</h5>
                    <h2 className='tex20'>GET IN TOUCH</h2>
                    <h2 className='runners'><b>RUNNERSFIXCOACHING@GMAIL.COM</b></h2>
                    <h2 className='number'><b>+1 (863) 670-0514</b></h2>
                    <h2 className='follow'><b>FOLLOW US</b></h2>
                    <div >
                       <img className='facebook' src= {facebook} alt="background"/>
                    </div>
                    <div>
                    <button className='box2'>
                        <img className='instagram' src= {instagram} alt="background"/>
                    </button>
                    </div>
                    <div>
                        <img className='twitter' src= {twitter} alt="background"/>
                    </div>
                    <div>
                    <button className='box1'>
                       <h3 className='linkedin'>in</h3>
                    </button>
                    </div>
                    
               </div>
               </div>
               
            </div>
            </div>
            <div class='Line15'></div>
        </div>
    )
}
export default Contact;