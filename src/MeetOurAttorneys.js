import React from 'react';
import background2 from './Homeimages/5.jpg';
import att1 from './Homeimages/7.png';
import att2 from './Homeimages/6.png'
import { HashLink as Link } from 'react-router-hash-link';
import './attorneys.css';
import background3 from './Homeimages/white1.jpg';
import circle from './Homeimages/button(2).png'
import Card from "@material-ui/core/Card"

function Attorneys(){
    return(
        <div id="attorneys"
        className='background'
        >
        <div style={{
          backgroundImage: 'url('+background3+')',
          backgroundSize: "cover",
          background: "rgba(255,0,0,0.5)",
          
          width: "350px",
          marginLeft:"470px"
        }}>
            
       <div className='home'>
          <ul><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
              <Link to='#intro' smooth className='sectio1'>INTRO</Link><br/><br/>
              <Link to='#about' smooth className='sectio1'>ABOUT US</Link><br/><br/>
              <div className='circle1'><img src={circle} alt="background"/><Link to='#attorneys'smooth className='sectio'>MEET OUR ATTORNEYS</Link><br/><br/></div>
              <Link to='#practice'smooth className='sectio1'>PRACTICE AREAS</Link><br/><br/>
              <Link to='#victories'smooth className='sectio1'>OUR VICTORIES</Link><br/><br/>
              <Link to='#blogs'smooth className='sectio1'>BLOGS</Link><br/><br/>
              <Link to='#contact' smooth className='sectio1'>CONTACT</Link>
              
              </ul>
              
               <img className='att1' src ={att1} alt="background"/>
               <img className='att2'src ={att2} alt="background"/>
            <div>
                  <h4 className='team'>TEAM</h4>
                  <h1>MEET&nbsp;OUR&nbsp;ATTORNEYS</h1>
                  <b><h3 className='hr-lines'>SAMITH&nbsp;JOHS.</h3></b>
                  <h5 className='lorem'>Lorem&nbsp;ipsum&nbsp;dolor&nbsp;sit&nbsp;amet,&nbsp;consectetur&nbsp;adipisci&nbsp;elit,&nbsp;sed</h5> 
                  <h5 className='elit'>eiusmod&nbsp;tempor&nbsp;incidunt&nbsp;ut&nbsp;labore&nbsp;et&nbsp;dolore&nbsp;magna&nbsp;aliqua.</h5>
                  <h5 className='elit'> enim&nbsp;ad&nbsp;minim&nbsp;veniam,&nbsp;quis&nbsp;nostrum&nbsp;exercitationem</h5>
                  <h5 className='elit'> ullam&nbsp;corporis&nbsp;suscipit&nbsp;laboriosam,&nbsp;nisi&nbsp;ut&nbsp;aliquid&nbsp;ex&nbsp;ea&nbsp;mo</h5>
                  <h5 className='elit'> consequatur. </h5>
                  <button class="square1">
                      <h4 class="text">READ MORE</h4>
                  </button>
             </div>
             
        </div>
        
        </div>   
        <div class="verticalLine1">  
          </div> 
           <div class="Line12"></div>
      </div>
    );
};
export default Attorneys;