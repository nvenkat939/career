import React from 'react';
import '../App.css';
import { Button} from './Button';
import './HeroSection.css';

function HeroSection(){
    return(
        <div className='hero container'>
            <video src='/videos/video-2.mp4'autoPlay loop muted/>
            <h1>CAREER AHEAD</h1>
            
            <div className='hero-btns'>
               
                
            </div>
        </div>
    );
}
export default HeroSection;