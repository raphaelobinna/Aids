import React from 'react';
import { Route } from 'react-router-dom';
import Aids from './Aids';
import Donate from './Donation/Donate'
import Country from "./country/country";
import './Container.css'

const home = () => {
    return (
        <div>
            <div class="header">
                <div class="head">
                    <h1>Aid<span>.</span></h1>
                </div>
                <ul class="nav">
                    <li class="nav-item"><a href="/" class="list-item">Home</a></li>
                    <li class="nav-item"><a href="/Donate" class="list-item">Donate To Us</a></li>
                    <li class="nav-item"><a href="/About" class="list-item">About Us</a></li>
                    <li class="nav-item"><a href="" class="list-item">Causes</a></li>
                    
                    <li class="nav-item"><a href="" class="list-item">contact</a></li>
                </ul>
                
            </div>
            
                <Route path="/" exact component={Aids}/>
                <Route path="/Donate" exact component={Donate}/>
                <Route path="/About" exact component={Country}/>
        </div>
    )
};
export default home;