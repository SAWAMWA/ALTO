import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import cctv from  "./../Media/cctv.jpg";
import Allto2 from  "./../Media/Allto2.png";
import biometric from  "./../Media/biometric.jpg";
import Footer from "./footer"
import  "../App.css";

export class Productservices extends Component {
    render() {
        return (
            <div>
                <h1><u>Products and Services</u></h1>
                <br></br>
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                            <h3>CCTV camera surveillance and Alarm installation.</h3>
                            <article>We do specialize in CCTV surveillance camera installation and configuration at 
                                residential homes and offices in interior and exterior for security monitoring purpose. 
                                In case there is crime committed like theft or stolen property within the premise, 
                                we have secured the photo footage for retrieval to find out who were the perpetrators, 
                                so as to be used by during  investigation and prosecution of the alleged identities in the court of law.
                                We have very qualified Technicians and Engineers who does professional and quality work 
                                according to the required standards
                            </article>
                        
                        </Col>
                        <Col>  <img
                                className="d-block w-100"
                                src={cctv}
                                alt="First slide"
                            /></Col>
                    </Row>
                    <br></br><br></br>
                    <hr></hr>
                    <Row xs={1} md={2}>
                         <Col>  <img
                                className="d-block w-100"
                                src={Allto2}
                                alt="First slide"
                            /></Col>
                        <Col>
                            <h3>Networking and Structural cabling of fiber and copper installation</h3>
                            <article>
                                We specialize in Fiber optic cable installation, splicing/Termination, testing, 
                                and commissioning of both Indoor and outdoor. 
                                Fiber optic new project implementation and maintenance service, cable trenching
                                and ducting.
                                We also do Copper installation, termination, testing and commissioning alongside Microwave including Wimax, VL.
                                we specialize in the Installation of ODF (Optic Distribution Frame), Switches, Routers, cabinets and wireless routers.
                                We have very reputable Engineers, Optic Technicians and qualified staff who offers back 
                                office support facilitation required to teams in Field- herein refereed in line three above.

                            </article>
                        
                        </Col>
                       
                    </Row>
                    <br></br><br></br>  <hr></hr>

                    <Row xs={1} md={2}>
                        <Col>
                            <h3>Biometric Control System </h3>
                            <article>
                            We install specifically for office, government institution, learning institutions. 
                            This enables to strict access to no authorized persons or individuals to certain area, for instace,
                            key installation like sarver room or finance and accountability. 
                            It is also used to capture clock in/ clock out for the staff and students. 
                            </article>
                        
                        </Col>
                        <Col>  <img
                                className="d-block w-100"
                                src={biometric}
                                alt="First slide"
                            /></Col>
                    </Row>
            </Container>
            <br></br>
            <Footer/>
            </div>
        )
    }
}

export default Productservices
