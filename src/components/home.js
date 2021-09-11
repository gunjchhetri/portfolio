import React from 'react'
import '../styles/home.scss';
import dp from '../assets/images/logo.svg';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
export default function Home(props) {
const history=useHistory();
  useEffect(() => {
      return(()=>{
        setTimeout(() => {
          
        }, 0);  
      });
  }, []) 
  let gotoPage=(page)=>{
    history.push('/'+page);
  }
    return (
        <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row'
        >
   
            <div   data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-6'>
                <img class='circular-image' src={dp}></img>
            </div>
            <div   class='col-md-6 about-me'>
                <div>
                    <span class='hello-text main-section-header'>Hello,</span>
                </div>
                <div>
                    a bit about me:
                </div>
                 
                <div class='round-menu'>
                   
                   <div class='menu-item'>
                       <div onClick={()=>gotoPage('skills')} class='content'>
                       My Resume
                       </div>
                   </div>
                   <div class='menu-item'>
                   <div  onClick={()=>gotoPage('projects')} class='content'>
                       My Work
                       </div>
                   </div>
                   <div class='menu-item'>
                   <div  onClick={()=>gotoPage('skills')} class='content'>
                       My Skills
                       </div>
                   </div>
                </div>
                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='description'>
                    <p class='my-exp'>
                    I am a software developer having 8+ years of experience in Web Technologies. I have an experience working on various Web Technologies like .Net Technologies, node js, Django Framework, Angular/ React  Frameworks and Other UI tools. Recently, I have started working on mobile applications using Flutter/Ionic Framework. 
                    </p>
                    <p>  
                    I like learning new things and to grow, exploring new aspects of Technologies everyday.
                    </p>
                </div>
                

            </div>
        </div>
    )
}

 