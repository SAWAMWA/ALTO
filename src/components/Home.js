import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Carousel} from "react-bootstrap";
import Navbarheader from "./Navbarheader"
import Ourcompany from "./Ourcompany"
import main from  "./../Media/main.png";


export class Home extends Component {
    render() {
        return (
            <>
                    <Navbarheader/>
                    <br></br>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={main}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2>ALLTO CONSTRUCTION COMPANY</h2>
                                <p>We uncover, understand and consolidate the needs of our customers</p>
                                <Button>Find out more...</Button>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            <Ourcompany/>
          </>
        )
    }
}

export default Home
