import React from 'react';
//import { Route } from 'react-router-dom';
//import Donate from './Donation/Donate';
import Causes1 from './images/causes-1.jpg'
import Causes2 from './images/causes-2.jpg'
import Causes3 from './images/causes-3.jpg'
import Causes4 from './images/causes-4.jpg'
import Causes5 from './images/causes-5.jpg'
import './Aids.css'

const aids = () => {
    return (
        <div class="space">
        <div class="page">
            {/* <div class="header">
                <div class="head">
                    <h1>Aid<span>.</span></h1>
                </div>
                <ul class="nav">
                    <li class="nav-item"><a href="" class="list-item">Home</a></li>
                    <li class="nav-item"><a href="/Donate" class="list-item">Donate To Us</a></li>
                    <li class="nav-item"><a href="" class="list-item">Causes</a></li>
                    <li class="nav-item"><a href="" class="list-item">Stories</a></li>
                    <li class="nav-item"><a href="" class="list-item">contact</a></li>
                </ul>
                
            </div> */}
            <br/>
            <div class="a">
                <div class="b">
                    <a href="https://www.wfp.org/videos">PLAY VIDEO</a>
                </div>
                <div class="b paul">
                    <h1>WE CAN HELP TO SAVE THE WORLD</h1>
                    <br/>
                    <a href="/Donate">How Can I Help</a>
                </div>
            </div>
        </div>

        
        <div class="c">
            <div class="oh">
                <div>
                    <h2>We need volunteers in Africa</h2>
                    <br/>
                    <p>
                        Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Seperated they live in Bookmarksgroove right at the coast of the Semantics.
                    </p>
                    <br/>
                    <a href="">Join now</a>
                </div>    
            </div>
            <div class="damn">
                <h1>Donation so far <span>$380,000</span></h1>
                <p>
                    Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Seperated they live in Bookmarksgroove right at the coast of the Semantics. 
                </p>
                <br/>
                <a href="/Donate">Donate now</a>
            </div>
        </div>
        <div class="d">
            <div class="look">
                <img src="" alt=""/>
                <h2>Help and Support</h2>
                <p>203 fake St. Mountain View, Sam Francisco, California, USA</p>

            </div>  
            <div class="look">
                <img src="" alt=""/>
                <h2>Adoption</h2>
                <p>A small river named Duden flows by their place and supply</p>
            </div>
            <div class="look modric">
                <img src="" alt=""/>
                <h2>Volunteering</h2>
                <p>A small river named Duden flows by their place and supply</p>
            </div> 
            <div class="look">
                <img src="" alt=""/>
                <h2>Education</h2>
                <p>A small river named Duden flows by their place and supply</p>
            </div>  

        </div>
        <div class="e">
            <div class="odin">
                <h2>Let's build the world without child abuse and neglect</h2>
                <p>
                    Far far away, behind the world mountains, far from the countries Vokalia and Consonantia.  
                </p>
            </div>
            <div class="thor">
                <div class="loki">
                    <img src={Causes1} alt=""/>
                    <h2>Adoption, Fostering and Children Care</h2>
                </div>
                <div class="loki">
                    <img src={Causes2} alt=""/>
                    <h2>Disadvantages Young People</h2>
                </div>
                <div class="loki">
                    <img src={Causes3} alt=""/>
                    <h2>Medication and Crisis Services</h2>
                </div>
                <div class="loki">
                    <img src={Causes4} alt=""/>
                    <h2>Providing Children Care and Education</h2>
                </div>
                <div class="loki">
                    <img src={Causes5} alt=""/>
                    <h2>Saveguarding and Consultancy Services</h2>
                </div>
            </div>
        </div>
        <div class="f">
            <div class="thanos">
                <div class="ant-man"></div>
            </div>
            <div class="hulk">
                <h2>Success Stories</h2>
                <p>
                    Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div class="vision">
                    <div>
                        <img src="/person_1.jpg" alt=""/>
                    </div>
                    <ul>
                        <li>Obinna Raph</li>
                        <li class="black-panther">Tech Guy</li>
                        
                        <li>To comment click <a href="https://wa.me/+2348160573782">here</a></li>
                    </ul>
                </div>
               
            </div>
        </div>
        
       

    </div>
    )
};

export default aids;