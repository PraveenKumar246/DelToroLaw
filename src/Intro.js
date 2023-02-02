import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import background from './Homeimages/1.jpg';
import About from './About';
import Attorneys from './MeetOurAttorneys';
import Practice from './Practice Areas';
import Victories from './Our Victories';
import Blogs from './Blogs';
import Contact from './Contact';
import logo from './Homeimages/2.png';
import phone from './Homeimages/phone.svg';
import './Intro.css';
import Final from './Final';
import circle from './Homeimages/button(2).png'
import { FaCircle} from 'react-icons/fa'




function Intro() {
  

  return (
    
    <Router>
        
    <div id="intro"
        class="bg_image"
        style={{
          backgroundImage: 'url('+background+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
          overflowX:"hidden"
        }}
      ><div class="verticalLine">
        
        <ul className='header'>
        
           <img src ={logo} alt="background"/>
           <h3 className='free'>FREE CONSULTATION</h3>
           
           <div className='header1'>
           <img className='phone2' src={phone} alt="background"/>
              <h2>(123) 546 7890</h2>
              
           </div>
          
        </ul>
        
       
        
        <ul><br/><br/><br/><br/><br/>
        <div className='circle'><img src={circle} alt="background"/><Link to='' smooth className='section'> INTRO</Link><br/><br/></div>
              <Link to='#about' smooth className='section1'>ABOUT US</Link><br/><br/>
              <Link to='#attorneys'smooth className='section1'>MEET OUR ATTORNEYS</Link><br/><br/>
              <Link to='#practice'smooth className='section1'>PRACTICE AREAS</Link><br/><br/>
              <Link to='#victories'smooth className='section1'>OUR VICTORIES</Link><br/><br/>
              <Link to='#blogs'smooth className='section1'>BLOGS</Link><br/><br/>
              <Link to='#contact' smooth className='section1'>CONTACT</Link>
              
              
           <h2 className='welcome'><i>Welcome To</i></h2>
           
              <h1 className='name'>DEL TORO LAW FIRM</h1>
           
           <button class="square">
              <h4 class="text">CONTACT US TODAY</h4>
            </button>
        </ul>
        </div>
        <div class="Line1"></div>
      </div>
      
      <About/>
      <Attorneys/>
      <Practice/>
      <Victories/>
      <Blogs/>
      <Contact/>
      <Final/>
      
      </Router>
      
  );
}

export default Intro;


