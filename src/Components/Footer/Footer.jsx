import React from 'react';
import './footer.scss';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

function Footer() {
  return (
    <>
      <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}} />
        <div className="f-content">
            <span>abhaythakur2432@gmail.com</span>
            <div className="f-icons">
             
                <a href="https://www.linkedin.com/in/yogesh-kumar-9b587b252" rel='noreferrer' target='_blank'>
                <LinkedIn color='white' size='3rem'/>
                </a>
                <a href="https://github.com/Abhay-Pratap-SINGH28" target='_blank' rel='noreferrer'>

                <Github color='white' size='3rem'/>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
