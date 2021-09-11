import React from 'react'
import '../styles/menu-popup.scss';
export default function MenuPopup(props) {
    

    return (
       <div class='popup-overlay'>
            <div  class='menu'  className={props.selected=='home'?'selected menu':'menu'}>
                HOME
            </div>
            <div class='menu' className={props.selected=='skills'?'selected menu':'menu'}>
                RESUME
            </div>
            <div  class='menu'  className={props.selected=='projects'?'selected menu':'menu'}>
                PROJECTS
            </div>
            <div  class='menu'  className={props.selected=='contacts'?'selected menu':'menu'}>
                CONTACT
            </div>
       </div>
    )
}
