import React from 'react'
import '../styles/skills.scss';
import { useEffect, useState } from 'react';
export default function Skills(props) {
    useEffect(() => {
        
        return(()=>{
           
        });
    }, []) 

    return (
        <div   data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" >
           
            <div class='row main-section'>
            <div class='resume-header main-section-header'>
                RESUME <i class="fa download-link fa-arrow-circle-down"></i>
           </div>
                <div class='col-md-9  experience'>
                <div class='row section-content'>
                            <div class='col-md-3'>
                                <div class='label-icon'>
                                   Professional Info
                              </div>
                            </div>
                            <div class='col-md-9'>
                                <div class='experience-header'>
                                    IT Developer - Barclays.
                               <br></br>
                               <span> 2016 - Present</span>
                               <br></br>
                               <br></br>
                            </div>
                                <div class='experience-description content-text'>
                                I have been working as IT Developer with Barclays Technology Center for past 4 years with prior
                                 4.8 years of experience as IT support consultant in Tata Consultancy Services. I have donned multiple 
                                 roles as part of my job including team leading, Production Support, test analyst, application development and deployment support. 
                                 I have the ability to provide solutions and add value to my clients with my hands-on experience working in 
                                 diverse technologies and different methodologies in the financial and utilities market space.
                            </div>
                             
                             
                            </div>
                        </div>
                       
                        <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row  section-content'>
                            <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-3'>
                                <div class='label-icon'>
                                    Work Experience
                              </div>
                            </div>
                            <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-9'>
                                <div class='experience-header'>
                                    IT Developer - Barclays.
                               <br></br>
                               <span> 2016 - Present</span>
                               <br></br>
                               <br></br>
                            </div>
                                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='experience-description content-text'>
                                    For the past 4 years, I have been working with Barcalys Technology Center India in Investment Banking Domain.
                                    Working as an IT developer, I've been working in various Technologies like - .Net Frameworks, Angular, SQL Server and Other DevOps tools
                                    like - Git, BitBucket, TeamCity, Veracode, Sonarcube, JIRA. Beside this, I also got to work in AWS Technolgies for POC projects.
                            </div>
                            <br>
                            </br>
                            <br></br>
                            <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='experience-header'>
                                    Team Lead - Tata Consultancy Services.
                               <br></br>
                                <span> 2012 - 2016 </span>
                               <br></br>
                               <br></br>
                            </div>
                                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='experience-description content-text'>
                                    I worked with TCS for around 4.8 years and in these years, I gotto work on various Technologies like - .Net, Django, Knockout.js and Angular Js. 
                                    I also got to lead a team of size 5 for an application built for Alcoa Client. This application is mainly designed for plant engineers where they can provide
                                     their input for any operation like rolling, extrusion, casting etc and these inputs are then validated by a python library and provide them the
                                    output on the basis of their input. This application helps them to reduce the risk that may arise in the plant because of wrong inputs.Therefore 
                                      engineers can validate their input before implementing them in real life scenario.
                               </div>
                            </div>
                        </div>
                       
                        <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row section-content'>
                            <div class='col-md-3'>
                                <div class='label-icon'>
                                    Education
                              </div>
                            </div>
                            <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-9'>
                                <div class='experience-header'>
                                    B.Tech - Siliguri Institute Of Technology.
                               <br></br>
                               <span> 2007 - 2011</span>
                               <br></br>
                               <br></br>
                            </div>
                           
                            
                            </div>
                        </div>
                    
                </div>
                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-3 skills'>
                   <div class='skills-icon'>
                   <i class="fa fa-exclamation-circle"></i>
                    
                   </div>
                   <div class='skills-header'>Skills</div>
                   <div  class='skills-description'>
                       <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='header'>Frameworks</div>
                       <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='skills-item'>
                          Asp.Net, .Net Core
                          <br></br>
                          Express(Node.js)
                          <br></br>
                          Django
                          <br></br>  
                          Angular, React
                          <br>
                          </br>
                          Flutter
                       </div>
                       <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='header'>Languages</div>
                       <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='skills-item'>
                         C#, Python, Dart
                          <br></br>
                         Javascript, Typescript, HTML/CSS
                          <br></br>
                          SQL
                       </div>
                       <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='header'>Databases</div>
                       <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='skills-item'>
                         SQL Server, Oracle, MongoDB                          
                       </div>
                       <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='header'>Others</div>
                       <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='skills-item'>
                         AWS, GIT, TeamCity , Veracode, Sonarcube, Karma, Jasmine, Grunt                          
                       </div>
                   </div>
                </div>
            </div>
            
       
        </div>
    )
}
