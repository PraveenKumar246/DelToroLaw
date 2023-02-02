import React from 'react';
import logo from './Homeimages/2.png';
import maps from './Homeimages/maps.jpg';
import location from './Homeimages/location.svg';
import mail from './Homeimages/mail.svg';
import phone from './Homeimages/phone.svg';
import facebook from './Homeimages/facebook.svg';
import instagram from './Homeimages/instagram1.svg';
import twitter from './Homeimages/twitter.svg';
import {HashLink as Link} from 'react-router-hash-link';
import './Final.css'

function Final(){
    return(
        <div id="contact"
        style={{
          background:"black",
          backgroundSize: "cover",
          height: "110vh",
          color: "#f5f5f5",
          overflowX:"hidden"
        }}>
          
         <ul className='heade'>
         
         <img src ={logo} alt="background"/>
         <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo ultricies venenatis. Quisque<br/> metus pulvinar, viverra lorem dapibus, hendrerit petrium leo. Aenean tristique nec diam a pulvinar.</h3>
         <img className='maps' src ={maps} alt="background"/>
         
         </ul>
        <div className='home'>
         <div>
           <div className='add'>
             <h2 className='address'><b>ADDRESS INFO</b></h2>
             <img className='location' src={location} alt="background"/>
             <h5>2101 South Interstate 35,Suite 206,<br/><br/>Austin, Texas,78741, United States</h5>
             <Link to='#intro' smooth className='get'>GET DIRECTIONS</Link><br/><br/>
           </div>
         
        
           <div className='add'>
             
             <img className='mail' src={mail} alt="background"/>
             <h5>hector@deltorolaw.com<br/><br/>juan@deltorolaw.com</h5>
            
           </div>
           <div className='add'>
             
             <img className='mail' src={phone} alt="background"/>
             <h5>Main: 512-524-1414<br/><br/>Fax: 512-524-1541</h5>
            
           </div>
           
                    <div className='add'>
                      <img className='facebook1' src= {facebook} alt="background"/>
                    </div>

                    <div className='add'>
                    <button className='box20'>
                        <img className='instagram1' src= {instagram} alt="background"/>
                    </button>
                    </div>

                    <div className='add'>
                      <img className='twitter1' src= {twitter} alt="background"/>
                    </div>

                    <div className='add'>
                    <button className='box10'>
                       <h3 className='linkedin'>in</h3>
                    </button>
                    </div>
                    
                  
                </div> 

                <div className='hours'>
                   <h2><b>HOURS</b></h2>
                   <h3 className='mon'>Mon  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 am - 05:00 pm</h3>
                   <h3 className='tue'>Tue  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 am - 05:00 pm</h3>
                   <h3 className='wed'>Wed   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 am - 05:00 pm</h3>
                   <h3 className='thu'>Thu  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 am - 05:00 pm</h3>
                   <h3 className='fri'>Fri  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 am - 05:00 pm</h3>
                   <h3 className='sat'>Sat  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3><h3 className='s1'>Closed</h3>
                   <h3 className='sun'>Sun  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3><h3 className='su1'> Closed</h3>
                   <h3 className='copy'>COPYRIGHT&nbsp;©&nbsp;2022&nbsp;DEL&nbsp;TORO&nbsp;LAW&nbsp;-&nbsp;ALL&nbsp;RIGHTS&nbsp;RESERVED</h3>
                </div>
                    
                <div className='quick'>
                   <h2 ><b>QUICK LINKS</b></h2>
                   <h3 className='mon1'>HOME</h3>
                   <h3 className='tue1'>ABOUT US</h3>
                   <h3 className='wed1'>MEET OUR ATTORNEYS</h3>
                   <h3 className='thu1'>PRACTICE AREAS</h3>
                   <h3 className='fri1'>OUR VICTORIES</h3>
                   <h3 className='sat1'>BLOGS</h3>
                   <h3 className='sun1'>CONTACT</h3>
                </div>
        </div>
        </div>
    )
}
export default Final;