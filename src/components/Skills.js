import React from 'react';
import '../index.css'

class Skills extends React.Component 
{
    render()
    {
        return(
            <div id="skillsMainDiv">
                <div id="skillsDiv">
                        <h3>
                      My Skills
                        </h3>
                    </div>
                    <div>

                    </div>
                  
                    <div className="script">
                        <h5>Java</h5>
                        <div className="progress" style={{height:"20px"}}>
                        <div id="bar1"  className="progress-bar  " role="progressbar" aria-valuenow="60" aria-valuemin="0"  aria-valuemax="100" style={{width: '60%'}}></div>
                        <div id="shadowOne"></div>
                        </div>
                    </div>
                    <div className="script">
                        <h5>C</h5>
                        <div className="progress" style={{height:"20px"}} >
                        <div id="bar2"  className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                        <div id="shadowTwo"></div>
                        </div>
                    </div>
                    <div className="script" s>
                        <h5>JavaScript</h5>
                        <div className="progress" style={{height:"20px"}}>
                        <div id="bar3" className="progress-bar " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                        <div id="shadowThree"></div>
                        </div>
                    </div>
                    <div className="script" >
                        <h5>Python</h5>
                        <div className="progress" style={{height:"20px"}}>
                        <div id="bar4" className="progress-bar " role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width: '55%'}}></div>
                        <div id="shadowFour"></div>
                        </div>
                    </div>
                    
            </div>
        )
    }
}

export default Skills;