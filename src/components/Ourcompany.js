import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Jumbotron} from "react-bootstrap";
import  "../App.css";
import Productservices from "./Productservices"

export class Ourcompany extends Component {
    render() {
        return (
            <div>
               <Jumbotron>
                <hr></hr>
                   <div className='mission-statement'><h1>Our Vision</h1></div> 
                    <hr></hr>
                    <h4>
                        Be a leader in Innovation and Development in Telecommunication infrastructure systems Implementation
                        as well as maintenance, overall civil works, building and road construction
                    </h4>
                    <br></br><hr></hr>
                    <div className='mission-statement'><h1>Our Mission</h1></div> 
                      <hr></hr>
                    <h4>
                        Strive to supply our valued clients with superior telecommunication internationally accepted standards 
                        in fiber optics, copper and microwaves (wireless internet systems).
                    </h4>
                    <h4>
                        Deliver the highest level of customer service in providing a long term network 
                        infrastructure systems across the region.
                    </h4>
                    <br></br><hr></hr>
                    <div className='mission-statement'><h1>Brand Values</h1></div> 
                    <hr></hr>
                    <div className='brand-values'>
                        <p> <b>Customer focus: </b> We uncover, understand and consolidate the needs of our customers</p>
                        <p> <b>Commitment:  </b> We take charge of the proactive consolidationof our projects through cohesion, 
                                collaboration and teamwork
                        </p>
                        <p> <b>Integrity:  </b> We demonstrate honesty in our actions</p>
                        <p> <b>Innovative & Professionalism:  </b> We bring value to new ideas, approaching them with acreative, 
                            professional and critical attitude in order to put them into practice.
                        </p>
                        <p> <b>Credibility:  </b> We execute what we say.</p>
                        <p> <b>Efficiency:  </b> We deliver in time agreement. </p>

                    </div>
                   <hr></hr>
                </Jumbotron>
                <Productservices></Productservices>

            </div>
        )
    }
}

export default Ourcompany
