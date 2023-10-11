import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";
import Layout from "../commponents/Layout";
import { useEffect } from "react";
import { toast } from "react-toastify";
const Home = () => {
  const Banner =
    "https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_1280.jpg";
  const Hello =
    "https://cdn.pixabay.com/photo/2016/06/10/00/05/woman-1447068_1280.jpg";
  const image = {
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };
  useEffect(() => {
  setTimeout(() => {
        toast.success("Welcome ");
  }, 3000);
  // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="container-fluid py-5 my-5" style={image}>
        <div className="pt-5">
          <div className="container py-5">
            <div className="row">
              <div className="col text-primary">
                <Fade right>
                  <h2>
                    Hi <img src={Hello} alt="Hello" width="35px" /> I'm a
                  </h2>
                  <h1>
                    <Typewriter
                      options={{
                        strings: [
                          "React JS Developer!",
                          "FrontEnd  Developer!",
                          "Full Stack developer!",
                          "MERN Stack developer!",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
