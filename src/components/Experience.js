import React from 'react';
import '../index.css';
import Expertizo from './Image/expertizo.png';
import Sylani from './Image/sylani.jpg';
class Experience extends React.Component
{
    render()
    {
        return(
            <div id="experienceMainDiv" >
                <div id="experienceDiv">
                        <h3>
                        My Experience
                        </h3>
                    </div>
                    <div className="container">
                    <div className="row" id="experiences">
                    <div className="col-xm-12 col-sm-12 col-lg-4 col-xl-4" id="schoolEducationDiv"> 
                        <div className="card" style={{width: '18rem'}}>
                        <img  src={Expertizo} className="card-img-top" alt="image"/>
                       <div  className="card-body">
                       <h5 className="card-title">Expertizo</h5>
                       <p className="card-text">Work as a <b>Mern Stack Dveloper</b></p> 
                       <br />        
                       </div>
                       </div>
                   </div>
                   <div className="col-xm-12 col-sm-12 col-lg-4 col-xl-4"    id="CollageEducationDiv"> 
                        <div className="card" style={{width: '18rem'}}>
                        <img  src={Sylani} className="card-img-top" alt="image"/>
                       <div  className="card-body">
                       <h5 className="card-title">Sylani</h5>
                       <p className="card-text">Work as a <b>Mern Stack Dveloper</b></p> 
                       <br />        
                       </div>
                       </div>
                   </div>
            </div>
                    </div>
            

            </div>
        )
    }
}
export default Experience;