import React from 'react';
import background5 from './Homeimages/10.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import circle from './Homeimages/button(2).png'
import './victories.css';

function Victories(){
    return(
        <div id="victories"
            style={{
          backgroundImage: 'url('+background5+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
          overflowX:"hidden"
        }}><div class='verticalLine'>
             <div className='home'>
            <ul><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
               <Link to='#intro' smooth className='sect1'>INTRO</Link><br/><br/>
               <Link to='#about' smooth className='sect1'>ABOUT US</Link><br/><br/>
               <Link to='#attorneys'smooth className='sect1'>MEET OUR ATTORNEYS</Link><br/><br/>
               <Link to='#practice'smooth className='sect1'>PRACTICE AREAS</Link><br/><br/>
               <div className='circle'><img src={circle} alt="background"/><Link to='#victories'smooth className='sect'>OUR VICTORIES</Link><br/><br/></div>
               <Link to='#blogs'smooth className='sect1'>BLOGS</Link><br/><br/>
               <Link to='#contact' smooth className='sect1'>CONTACT</Link>
              
              </ul>
              <div>
                 <h3 className='settle'>SETTLEMENT</h3>
                 <h1 className='our'>OUR VICTORIES</h1>
                 <button class="square3">
                    <h5 class="text">VIEW ALL</h5>
                 </button>
                 <button className='square8'>
                    <h2 className='text05'><b>$2.6 BILLION</b></h2>
                    <h4 className='text20'>Lorem ipsum dolor  sit amet,consectetur<br/> <br/>adipiscing elit.Morbi commodo ultricies<br/><br/></h4> <h4 className='text02'>venenatis.</h4>
               </button>
              </div>
              <div>
               <button className='square4'>
                    <h2 className='text05'>$8 BILLION</h2>
                    <h4 className='text0'>Lorem ipsum dolor  sit amet,consectetur<br/> <br/>adipiscing elit.Morbi commodo ultricies<br/><br/></h4> <h4 className='text02'> venenatis.</h4>
               </button>
               <button className='square6'>
                    <h2 className='text05'>$4.2 BILLION</h2>
                    <h4 className='text10'>Lorem ipsum dolor  sit amet,consectetur<br/><br/> adipiscing elit.Morbi commodo ultricies<br/><br/></h4> <h4 className='text01'>venenatis dolor ipsum.</h4>
               </button>
               </div>
               <div>
               <button className='square5'>
                    <h2 className='text05'>$7.1 BILLION</h2>
                    <h4 className='text30'>Quisque et metus pulvinar, viverra lorem<br/><br/> <h4 className='text03'>dapibus, hendrerit lorem.Nam faucibus</h4> <h4 className='text04'>pretium leo aenean tristique pulvinar.</h4></h4>
               </button>
               <button className='square7'>
                    <h2 className='text05'>$6 BILLION</h2>
                    <h4 className='text0'>Quisque et metus pulvinar, viverra lorem<br/><br/> <h4 className='text03'>dapibus, hendrerit lorem.Nam faucibus</h4> <h4 className='text04'>pretium leo aenean tristique pulvinar.</h4></h4> 
               </button>
               </div>
            </div>
            </div>
            <div class='Line1'></div>
        </div>
    );
};
export default Victories;