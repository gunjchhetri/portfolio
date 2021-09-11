import React from 'react'
import '../styles/contact.scss';
import { useEffect, useState } from 'react';
 

export default function Contacts(props) {
 const [email,setEmail]=useState('gunjan.chhetri88@gmail.com');
 const [subject,setSubject]=useState('ee');
 const [message,setMessage]=useState('ee');
 let sendEmail=()=> { 
        window.Email.send({           
          SecureToken:'44f0ab84-114a-4b80-865f-e17d1594f0ab', 
          To: 'gunjan.chhetri88@gmail.com', 
          From: email, 
          Subject: subject, 
          Body: message, 
        }) 
          .then(function (message) { 
            alert("mail sent successfully") 
          }); 
      }
    return (
       
            <div  data-aos="fade-up"  data-aos-duration="1000" class='row contact-section'>
                
                <div class='col-md-6 '>
                    <div class='contact'>
                        <div class='contact-header main-section-header'>
                            Contact
                        </div>
                        <div class='contact-info'>
                            <div> <span>Phone:</span><span>+918016926871</span></div>
                           
                           
                           
                            <div><span>Email:</span><span>gunjan.chhetri88@gmail.com</span></div>
                            
                        </div>

                    </div>
                </div>
                <div class='col-md-6'>
                    <div   data-aos="fade-up"  data-aos-duration="1000">
                    <div class='info'>
                        Looking forward to answering your email
                   </div>
                    <div class='form'>
                        <input type='text' class='content-text' placeholder='Name'></input>
                        <br>
                        </br>
                        <input type='text' class='content-text' placeholder='Email'></input>
                        <br>
                        </br>
                        <input type='text' class='content-text' placeholder='Phone'></input>
                        <br></br>
                        <textarea class='content-text' rows='6' placeholder='Type your message here..'></textarea>
                        <br></br>
                        <div>
                            <span onClick={sendEmail} class='submit'>Submit</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
  
    )
}
