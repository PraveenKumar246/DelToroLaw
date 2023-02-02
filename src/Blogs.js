import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './blogs.css';
import blog1 from './Homeimages/11.jpg';
import blog2 from './Homeimages/12.jpg';
import blog3 from './Homeimages/13.jpg';
import circle from './Homeimages/button(2).png'

function Blogs(){
    return(
        <div id="blogs"
        style={{
      
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
               <Link to='#victories'smooth className='sect1'>OUR VICTORIES</Link><br/><br/>
               <div className='circle'><img src={circle} alt="background"/><Link to='#blogs'smooth className='sect'>BLOGS</Link><br/><br/></div>
               <Link to='#contact' smooth className='sect1'>CONTACT</Link>
              
            </ul>
            <div>
                 <h3 className='blogs'>BLOGS</h3>
                 <h1 className='latest'>LATEST POSTS</h1>
                 <img className='blog1' src={blog1} alt="background"/>
                 <h3 className='jan19'>19 JAN 2022</h3>
                 <h2 className='ipsum'>LOREM IPSUM DOLOR SIT AMET, CONSECUTER<br/>ADIPISCING ELIT.MORBI COMMODO ULTRICIES.</h2>
                 <h4 className='ipsum0'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.<br/><br/>Morbi commodo ultricies venenatis.</h4>
            </div>

            <div>
                <img className='blog2' src={blog2} alt="background"/>
                 <h3 className='jan17'>17 JAN 2022</h3>
                 <h2 className='ipsum1'>LOREM IPSUM DOLOR SIT AMET, CONSECUTER<br/>ADIPISCING ELIT.MORBI COMMODO ULTRICIES.</h2>
                 <h4 className='ipsum2'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.<br/><br/>Morbi commodo ultricies venenatis.</h4>
            </div>
            <div>
                <button class="square10">
                    <h5 class="text">VIEW ALL</h5>
                 </button>
                <img className='blog3' src={blog3} alt="background"/>
                <h3 className='jan15'>15 JAN 2022</h3>
                 <h2 className='ipsum3'>LOREM IPSUM DOLOR SIT AMET, CONSECUTER<br/>ADIPISCING ELIT.MORBI COMMODO ULTRICIES.</h2>
                 <h4 className='ipsum4'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.<br/><br/>Morbi commodo ultricies venenatis.</h4>
            </div>
        </div>
        </div>
        <div class='Line14'></div>
      </div>
    )
}
export default Blogs;