import React from 'react';
import '../index.css'
import Myself from './Image/myself.jpg'
import Education from './Image/education2.jpg'
import School from './Image/school.jfif'
import Collage from './Image/collage.jpg'
import University from './Image/university.jfif'
class Info extends React.Component 
{
    render()
    {
        return(
            <div>
                <div id="personalInfoMainDiv">
                    <div id="personalInfoDiv">
                        <h3>
                        Personal Information
                        </h3>
                    </div>
                    <div id="aboutMeDiv">
                    <h4>
                        About Me
                    </h4>
                    <br/>
                    <div id="profileDiv">
                    <img id="profile" src ={Myself} alt="profile" />
                    </div>
                    <div id="profileContent">
                        <p>
                        My name is Syed Hammad Rizvi and I am a Mern Stack Developer also an Educated and a motivated software engineering student and a quick learner, quick to ramp up with any existing development platform, and perform design, coding, debugging, and testing application and system software. Excellent interpersonal as well as communication skills and enjoys a high-pressure team environment.
                        </p>
                    </div>
                    </div>
                    <img id="educationLogo" src={Education} alt="logo" />
                    <h4>
                        My Education
                    </h4>
                </div>
               
          <div id="educationDiv" className="container">
              <div className="row">
              <div className="col-xm-12 col-sm-12 col-lg-4 col-xl-4" id="schoolEducationDiv"> 
                      
                      <div className="card" style={{width: '18rem'}}>
                      <img  src={School} className="card-img-top" alt="image"/>
                     <div  className="card-body">
                     <h5 className="card-title">Prince Aly Boys School</h5>
                     <p className="card-text">Pass out in <br></br><b>2016</b><br></br> <br></br> <br></br></p> 
                 
                     </div>
                     </div>
                    
               </div>
              <div className="col-xm-12 col-sm-12 col-lg-4 col-xl-4" id="CollageEducationDiv">
                      <div className="card" style={{width: '18rem'}}>
                      <img src={Collage} className="card-img-top" alt="image"/>
                      <div className="card-body">
                      <h5 className="card-title">Govt Degree Collage Malir Centt</h5>
                      <p className="card-text">Intermediate from  Pre-Engineering in  <br></br><b>2016-2018</b> </p>
                    
                                    
                      </div>
                     </div>
              </div>

              <div className="col-xm-12 col-sm-12 col-lg-4 col-xl-4" id="UniversityEducationDiv">
                      <div className="card" style={{width: '18rem'}}>
                      <img src={University} className="card-img-top" alt="image"/>
                      <div className="card-body">
                      <h5 className="card-title">Sir Syed University of Engg & Technology</h5>
                      <p className="card-text">Graduate from Software Engineering in <br></br><b>2019-2022</b></p>
                      </div>
                      </div>


              </div>
              </div>
              
         </div>

 </div>
        )
    }
}
export default Info;
