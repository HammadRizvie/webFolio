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
                        <h5>HTML and Css</h5>
                        <div className="progress" style={{height:"20px"}}>
                        <div id="bar3" className="progress-bar " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                        <div id="shadowThree"></div>
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
                        <h5>React</h5>
                        <div className="progress" style={{height:"20px"}}>
                        <div id="bar3" className="progress-bar " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                        <div id="shadowThree"></div>
                        </div>
                    </div>
                    <div className="script" >
                        <h5>React Native</h5>
                        <div className="progress" style={{height:"20px"}}>
                        <div id="bar3" className="progress-bar " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                        <div id="shadowThree"></div>
                        </div>
                    </div>
                    <div className="script" >
                        <h5>Redux</h5>
                        <div className="progress" style={{height:"20px"}} >
                        <div id="bar2"  className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                        <div id="shadowTwo"></div>
                        </div>
                    </div>
                    <div className="script" >
                        <h5>BootStrap</h5>
                        <div className="progress" style={{height:"20px"}}>
                        <div id="bar3" className="progress-bar " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                        <div id="shadowThree"></div>
                        </div>
                    </div>
                    <div className="script" >
                        <h5>Material Ui</h5>
                        <div className="progress" style={{height:"20px"}}>
                        <div id="bar3" className="progress-bar " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                        <div id="shadowThree"></div>
                        </div>
                    </div>
                    
            </div>
        )
    }
}

export default Skills;