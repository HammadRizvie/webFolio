import React from 'react';
import '../index.css'
import Cartoon from './Image/cartoon.png'
import Git from './Image/git.svg'
import Gmail from './Image/gmail.svg'
import Facebook from './Image/facebook.svg'
import Snapchat from './Image/snapchat.svg'
import Twitter from './Image/twitter.svg'
import Instagram from './Image/instagram.svg'
import Cv from './Image/cv.svg'
import Download from './Image/download.svg'
import Swal from 'sweetalert';
class Intro extends React.Component
{
    popup = ()=>
    {
        Swal("Here's my Gmail Accont!", "hammadrixvi@gmail.com");
    }
    render()
    {
        return(
            <div id="introDiv">
                <span id="hello">Hello there!</span>
                <br/>
                <span id="name">I'm Syed Hammad Rizvi</span>
                <div>
                    <img id="cartoon" src={Cartoon} alt="logo"/>
                </div>
                <span id="connect">Connect With me Now !</span>
                <br/><br/>
                <div id="containerIntro" className="container">
                    <div className="row">
                        <div  className="col-xm-12 col-sm-12 col-lg-6 col-xl-6">
                       <a className="iconsSpacing" href="https://github.com/HammadRizvie" target='_blank' > <img className="linksImages" src={Git} alt="git"/> </a>
                   <a className="iconsSpacing" href="mailto:hammadrixvi@gmail.com"> <img className="linksImages" src={Gmail} alt="git"/> </a>
                    <a className="lastIconSpacing" href="https://www.facebook.com/hammadrixvi" target='_blank' > <img className="linksImages" src={Facebook} alt="git"/> </a>
                        </div>
                        <div  className="col-xm-12 col-sm-12 col-lg-6 col-xl-6">
                       <a className="firstIconSpacing" href="https://www.snapchat.com/add/hammad_rixvi" target='_blank' > <img className="linksImages" src={Snapchat} alt="git"/> </a>
                   <a className="iconsSpacing" href="https://twitter.com/HammadR83518249?s=08" target='_blank'> <img className="linksImages" src={Twitter} alt="git"/> </a>
                    <a className="iconsSpacing" href="https://www.instagram.com/hammad_rizvie" target='_blank'> <img className="linksImages" src={Instagram} alt="git"/> </a>
                        </div>
                    
                   
                    </div>
                    
                </div>
            
                <br/><br/><br/><br/>
                <span id="connect">Mern Stack Developer | Software Engineer</span>
                <br/><br/>
                <img id="cv" src={Cv} alt="logo" />
                <br/><br/>
                <button id="download" type="button" class="btn btn-outline-info"> Download CV <img id="downloadImage" src={Download} alt="logo" /></button>
                <br/><br/>
            </div>
        )
    }
}

export default Intro;