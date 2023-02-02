import React from 'react';
import background1 from './Homeimages/3.jpg';
import './About.css';
import Card from "@material-ui/core/Card";
import { HashLink as Link } from 'react-router-hash-link';
import phone from './Homeimages/phone.svg';
import chair from './Homeimages/4.jpg';
import circle from './Homeimages/button(2).png'
import Attorneys from './MeetOurAttorneys';


function About(){
    return(
        
        <div id="about"
       
        style={{
          backgroundImage: 'url('+background1+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
          overflowX:"hidden"
        }}
      ><div class="verticalLine">
        <ul><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <Link to='#intro' smooth className='section10'>INTRO</Link><br/><br/>
              <div className='circle'><img src={circle} alt="background"/><Link to='#about' smooth className='section11'>ABOUT US</Link><br/><br/></div>
              <Link to='#attorneys'smooth className='section10'>MEET OUR ATTORNEYS</Link><br/><br/>
              <Link to='#practice'smooth className='section10'>PRACTICE AREAS</Link><br/><br/>
              <Link to='#victories'smooth className='section10'>OUR VICTORIES</Link><br/><br/>
              <Link to='#blogs'smooth className='section10'>BLOGS</Link><br/><br/>
              <Link to='#contact' smooth className='section10'>CONTACT</Link>
              
        <div className='main1'>
            <div className='content'>
              <p className='del'>DEL TORO LAW FIRM</p>
              <h1 className='about'>ABOUT US</h1><br/><br/>
              <h5 className='want'>Want to know our services,how is your case going or simply want to leave us a</h5>
              <h5 className='voice'>voice message,do so by clicking the record button below.Please include your name and a</h5>
              <h5 className='phone'>phone number so we can reach out to you.</h5>
              <br/><br/>
              <h5 className='Quiere'>Quiere saber sobre nuestros services,cómo va su caso o simplimente quiere dejamos un</h5>
              <h5 className='mensaje'>mensajede voz, hágalo haclendo clic en el botón de  grabar a continuación.Incluya su</h5>
              <h5 className='nombre'>nombre y un número de teléfono para que podamos comunicarnos can usted.</h5>

               <h3 className='Free'>FREE CONSULTATION</h3>
           
                 <div className='consult'>
                 <img className='phone1' src={phone} alt="background"/>
                   <h1>(123) 546 7890</h1>
                 </div>
            </div>
              <img src ={chair} className='chair' alt ="background"/>
              
       </div>
       <Card 
           style={{
           width: 450,
           height:140,
           backgroundColor: "rgb(48, 47, 47)",
           marginLeft: "779px",
           marginTop: "-150px",

        }}
      >      <h3 className='legal'>LEGAL EXPERTISE YOU CAN RELY ON</h3>
             <button className='APPOINTMENT'>
              <h4 className='cita'>APPOINTMENT|CITA</h4>
            </button>
      </Card>
        </ul>
         </div>   
         <div class="Line1"></div>  
      </div>
  
 
        
       
    );
};
export default About;

