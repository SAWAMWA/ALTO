import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap";
import  "../App.css";
export class Footer extends Component {
    render() {
        return (
            <div>
                <Card bg="primary" expand="lg" >
                <Card.Body>
                    <Card.Title>Allto Construction Company ltd</Card.Title>
                    <Card.Text>
                        P.O BOX 50221 -00100 NAIROBI: 
                        TELL:  +254 724 59 81 40 
                        OFFICE: +254 736 80 01 59
                        Email:
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        )
    }
}

export default Footer
