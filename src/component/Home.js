import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar1 from "./Navbar1";
import asset2 from './asset2.png';
import Typical from 'react-typical';
import CardTemp from "./CardTemp";
import cyc1 from "./cyc1.jpg";
import cyc2 from "./cyc2.jpg";
import cyc3 from "./cyc3.jpg";
import cyc4 from "./cyc4.jpg";
import cyc5 from "./cyc5.jpg";
import cyc6 from "./cyc6.jpg";

const Home = () => {
 
  return (
    <>
  <div className="main">
  <div className="t1">
  <Navbar1/>
  </div>
   
    
    
    <div className="landing">
     <div className="box11">
           <div className="box11sub1">
           <p>
                   Cycle-Up 
                    {' '}
                    <Typical loop={Infinity} wrapper = 'b' className = 'typical'
                   steps={['helps in renting' , 1000 , 'keeps you healthy' , 1000]}
                   />
                   </p>
           </div>
           <div className="box11sub2">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam tempore libero perspiciatis dolorum vitae ab, ipsa velit expedita tempora! Quod cum, sed atque quo in reiciendis. Corrupti, distinctio voluptas?
           </div>
           <div className="box11sub3">
           <button class="button-64" role="button"><span class="text">Get Started</span></button>
           </div>
     </div>
     <div className="box22">
      <img src={asset2} alt="" className="asset2" />
      
     </div>
    </div>

 
  </div>
  <div class="grid-container">
  <div class="grid-item"><CardTemp s={cyc1}/></div>
  <div class="grid-item"><CardTemp s={cyc2}/></div>
  <div class="grid-item"><CardTemp s={cyc3}/></div>
  <div class="grid-item"><CardTemp s={cyc4}/></div>
  <div class="grid-item"><CardTemp s={cyc5}/></div>
  <div class="grid-item"><CardTemp s={cyc6}/></div>
  
 
</div>
   
   


    </>
  );
};

export default Home;
