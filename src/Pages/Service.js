import React from "react";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { ServiceList } from "../utils/ServiceList";
import './Service.css'
import Layout from "../commponents/Layout";
const Service = () => {


  return (
    <Layout>
      <div className="container my-5 py-5 h-100 techstack" >
        <RubberBand>
          <h2 className="col-12 mt-4 mb-1 text-center text-uppercase">
          Service
          </h2>
          <hr />
          
        </RubberBand>
        <div className="row py-5 mt-3">
          {
          ServiceList.map((tech) => (
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Service;
