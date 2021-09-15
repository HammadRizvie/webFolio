import { List } from '@material-ui/core';
import React from 'react';
import '../index.css';
class Projects extends React.Component
{
    render()
    {
        return(
            <div id="experienceMainDiv" >
                <div id="experienceDiv">
                        <h3>
                        My Projects
                        </h3>
                    </div>
                    <div className="container">
                    <div className="row" id="experiences">
                   
                       <div  className="card-body">
                       <h4 className="card-title">HTML, Css and JavaScript </h4>
                       <br />
                       <div>
                           <h6>
                                TODO
                           </h6>
                           <h6>
                                QUIZ WEBSITE
                           </h6>
                           <h6>
                                CLOCK
                           </h6>
                           <h6>
                                TIMER
                           </h6>
                           <h6>
                                STOP WATCH
                           </h6>
                           <h6>
                                CHATTER ( Chatting Website )
                           </h6>
                       </div>
                       </div>
                       <div  className="card-body">
                       <h4 className="card-title">React.js</h4>
                       <br />
                       <div>
                           <h6>
                                TODO
                           </h6>
                           <h6>
                                QUIZ WEBSITE
                           </h6>
                           <h6>
                                PORTFOLIO
                           </h6>
                       </div>
                       </div>
                       <div  className="card-body">
                       <h4 className="card-title">React Native</h4>
                       <br />
                       <div>
                           <h6>
                                UBBER CLONE
                           </h6>
                           <h6>
                                MR FIX ( APPLICATION )
                           </h6>
                       </div>
                       </div>
            </div>
                    </div>
            

            </div>
        )
    }
}
export default Projects;