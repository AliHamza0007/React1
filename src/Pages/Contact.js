import React, { useState } from "react";
import { toast } from "react-toastify";

import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import Layout from "../commponents/Layout";
const Contact = () => {
  const whatsappLink = "";
  const facebookLink = "";
  const linkedinLink = "";
  const githubLink = "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !msg) {
      toast.error("PLease Provide all fields");
    } else {
      toast.success(`
     Name : ${name}
     ,
     Email : ${email}
     ,
     MSG : ${msg}
     `);
    }
  };

  return (
    <Layout>
      <div className=" container my-2 py-4 shadow">
        <div className="card  border-0">
          <div className="row">
            <div className="col-md-6  col-sm-12">
              <div className="card">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="Contact_US"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className=" d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row text-center">
                      <h6>
                        <a href={linkedinLink}>
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href={whatsappLink}>
                          <BsWhatsapp
                            color="green"
                            size={30}
                            className="ms-2"
                          />
                        </a>
                        <a href={githubLink}>
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>

                        <a href={facebookLink}>
                          <BsFacebook color="blue" size={30} className="ms-2" />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3 form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3 form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3 form-control"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button
                        className="button btn btn-success"
                        onClick={handleSubmit}
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
