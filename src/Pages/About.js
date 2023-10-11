import React from "react";
import RubberBand from "react-reveal/RubberBand";
import "./Service.css";
import Layout from "../commponents/Layout";
const About = () => {
  const image = {
    width: "100%",
    padding: "50px",
    borderRadius: "30%",
  };

  return (
    <Layout>
      <div className="container h-100">
        <div className="container techstack">
          <RubberBand>
            <h2 className="col-12  text-center text-uppercase">About Me</h2>
            <hr />
          </RubberBand>
        </div>
        <div className="row py-2 ">
          <div className="col-md-6">
            <img
              className="img-responsive   "
              style={image}
              src={
                "https://cdn.pixabay.com/photo/2014/08/15/06/16/imprint-418594_1280.jpg"
              }
              alt="Ali Hamza"
            />
          </div>
          <div className="col-md-6  text-white">
            <h3 className="text-center">Summary</h3>
            <hr />

            <div className="container-fluid">
              <RubberBand>
                <h6>
                  Hi there! I'm ALI HAMZA, a website developer with a passion
                  for creating custom online experiences for my clients. With a
                  skill set including HTML, CSS, JavaScript, and React,
                </h6>
              </RubberBand>
              <RubberBand>
                <h6>
                  Highly motivated and detailed-oriented frontend developer with
                  experience in HTML, CSS, JavaScript and React JS. Passionate
                  about creating user-friendly web applications that are both
                  functionally and visually appealing. Seeking a challenging
                  position as a frontend developer where I can utilize my skills
                  and knowledge to contribute to the success of the company
                </h6>
              </RubberBand>

              <RubberBand>
                <h6>
                  So if you're in need of a new website or just looking to
                  revamp your current online presence, I'd love to chat and see
                  how I can help. Let's bring your website dreams to reality
                  together!
                </h6>
              </RubberBand>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
