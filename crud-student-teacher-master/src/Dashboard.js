import React from "react";
import { Base } from "./Base";
import Carousel from "react-bootstrap/Carousel";

const Dashboard = ({ children }) => {
  return (
    <Base>
      <div className="dashboard">
        <div className="main-content ">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
               
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p>
                HOME
                </p>
              </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
            
        </div>
      </div>
    </Base>
  );
};

export default Dashboard;


