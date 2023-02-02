import React from 'react';
import background4 from './Homeimages/9.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import './Practice.css';
import justice from './Homeimages/federal cases.svg';
import circle from './Homeimages/button(2).png'


function Practice(){
    return(
        <div id="practice"
            style={{
          backgroundImage: 'url('+background4+')',
          backgroundSize: "cover",
          height: "110vh",
          color: "#f5f5f5",
          overflowX:"hidden"
        }}><div class='verticalLine'>
            <div className='home'>
            <ul><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
               <Link to='#intro' smooth className='secti1'>INTRO</Link><br/><br/>
               <Link to='#about' smooth className='secti1'>ABOUT&nbsp;US</Link><br/><br/>
               <Link to='#attorneys'smooth className='secti1'>MEET&nbsp;OUR&nbsp;ATTORNEYS</Link><br/><br/>
               <div className='circle'><img src={circle} alt="background"/><Link to='#practice'smooth className='secti'>PRACTICE&nbsp;AREAS</Link><br/><br/></div>
               <Link to='#victories'smooth className='secti1'>OUR&nbsp;VICTORIES</Link><br/><br/>
               <Link to='#blogs'smooth className='secti1'>BLOGS</Link><br/><br/>
               <Link to='#contact' smooth className='secti1'>CONTACT</Link>
              
              </ul>
              <div>
                 <h3 className='services'>SERVICES</h3>
                 <h1 className='practice'>PRACTICE AREAS</h1>
                 <div className='box'></div>
                 <img className='justice' src={justice} alt="background"/>
                 <h3 className='federal'>FEDERAL CASES</h3>
                 <h5 className='Lorem'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Morbi</h5>
                 <h5 className='commodo'>commodo ultricies venenaties.Quisque et metus pulvinar,viverra</h5>
                 <h5 className='commodo'>lorem dapibus,hendrerit lorem.</h5>
                 <button className='square2'>
                    <h4 className='text'>READ MORE</h4>
                 </button>
            <div className='sec'>    
                 <button className='button'>
                    <h4 className='text1'>Jail Release</h4>
                 </button>
                 <button className='button1'>
                    <h4 className='text1'>Misdemeanor Cases</h4>
                 </button>
                 <button className='button2'>
                    <h4 className='text1'>Felony Cases</h4>
                 </button>
                 <button className='button3'>
                    <h4 className='text1'>Divorce</h4>
                 </button>
                 <button className='button4'>
                    <h4 className='text1'>Custody</h4>
                 </button>
                 <button className='button5'>
                    <h4 className='text1'>Warfants</h4>
                 </button>
                 <button className='button6'>
                    <h4 className='text1'>Tickets/Citations</h4>
                 </button>
            </div>
              </div>
              
              
              </div>
              </div>
              <div class='Line13' ></div>
        </div>
    );
};
export default Practice;