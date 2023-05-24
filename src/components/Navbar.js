import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick=() =>setClick(!click);
    const closeMobileMenu=() =>setClick(false);
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }

        };
        useEffect(()=>{
            showButton()
        },[]);
    window.addEventListener('resize',showButton);
    return(
        <>
         <nav className="navbar">
          <div className="navbar-container">
             <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                CAREER TALAASH<i className='fab fa-typo3' />
             </Link>
                
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>

            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Courses' className='nav-links' onClick={closeMobileMenu}>
                        Courses
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Examinations' className='nav-links' onClick={closeMobileMenu}>
                        Examinations
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Colleges' className='nav-links' onClick={closeMobileMenu}>
                        Colleges
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Nirf Ranking' className='nav-links' onClick={closeMobileMenu}>
                        Nirf Ranking
                    </Link>
                </li>
                
                <li className='nav-item'>
                    <Link to='/Jobs' className='nav-links' onClick={closeMobileMenu}>
                        Jobs
                    </Link>
                </li>
                

               
                
                
                
                
                
            </ul>
            
            {button && <Button buttonStyle='btn--outline'>LOG IN</Button>}
            </div>  
            </nav> 
        </>
    );
}
export default Navbar;