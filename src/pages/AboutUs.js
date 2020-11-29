import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div>
        <section
          className="hero is-medium"
          style={{
            background: "url('/background.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "70vh",
          }}
        >
          <div className="hero-body">
            <div className="container is-centered">
              <h1
                className="title is-centered"
                style={{
                  color: "white",
                  position: "absolute",
                  top: "70px",
                  fontSize: "3.9rem",
                }}
              >
                <span className="has-text-info">A JOURNEY </span>
                THAT WILL NEVER BE FORGOTTEN
              </h1>
            </div>
          </div>
        </section>
        <section
          className="container is-fluid"
          style={{
            height: "60vh",
            backgroundColor: "#6b3293",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "10%",
              right: "10%",
              top: "5%",
            }}
          >
            <p className="" style={{ color: "white" }}>
              <h2 className="title" style={{ color: "white" }}>
                Our Mission
              </h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod
              accusamus incidunt ipsam. Enim praesentium ut rerum recusandae
              autem consectetur unde illum a adipisci quidem minima, incidunt,
              dicta culpa impedit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fuga quod accusamus incidunt ipsam. Enim
              praesentium ut rerum recusandae autem consectetur unde illum a
              adipisci quidem minima, incidunt, dicta culpa impedit! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Fuga quod accusamus
              incidunt ipsam. Enim praesentium ut rerum recusandae autem
              consectetur unde illum a adipisci quidem minima, incidunt, dicta
              culpa impedit! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Fuga quod accusamus incidunt ipsam. Enim praesentium ut
              rerum recusandae autem consectetur unde illum a adipisci quidem
              minima, incidunt, dicta culpa impedit!
              <br />
              <h2 className="title my-5" style={{ color: "white" }}>
                Our Achievements
              </h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod
              accusamus incidunt ipsam. Enim praesentium ut rerum recusandae
              autem consectetur unde illum a adipisci quidem minima, incidunt,
              dicta culpa impedit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fuga quod accusamus incidunt ipsam. Enim
              praesentium ut rerum recusandae autem consectetur unde illum a
              adipisci quidem minima, incidunt, dicta culpa impedit! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Fuga quod accusamus
              incidunt ipsam. Enim praesentium ut rerum recusandae autem
              consectetur unde illum a adipisci quidem minima, incidunt, dicta
              culpa impedit! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Fuga quod accusamus incidunt ipsam. Enim praesentium ut
              rerum recusandae autem consectetur unde illum a adipisci quidem
              minima, incidunt, dicta culpa impedit!
            </p>
          </div>
        </section>
        <section
          className="container is-fluid"
          style={{
            height: "70vh",
            backgroundColor: "#FAFAFA",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "42%",
              top: "10%",
            }}
          >
            <h2 className="title">Our Milestones</h2>
          </div>
          <div
            style={{
              position: "absolute",
              left: "10%",
              top: "28%",
              display: "flex",
            }}
          >
            <div className="about-card mx-3">
              <img src="/2663543.jpg" alt="Hello"></img>
              <h1>250+ MILLION</h1>
              <h3>App Downloads</h3>
            </div>
            <div className="about-card mx-3">
              <img src="/2663543.jpg" alt="Hello"></img>
              <h1>250+ MILLION</h1>
              <h3>App Downloads</h3>
            </div>
            <div className="about-card mx-3">
              <img src="/2663543.jpg" alt="Hello"></img>
              <h1>250+ MILLION</h1>
              <h3>App Downloads</h3>
            </div>
            <div className="about-card mx-3">
              <img src="/2663543.jpg" alt="Hello"></img>
              <h1>250+ MILLION</h1>
              <h3>App Downloads</h3>
            </div>
            <div className="about-card mx-3">
              <img src="/2663543.jpg" alt="Hello"></img>
              <h1>250+ MILLION</h1>
              <h3>App Downloads</h3>
            </div>
            <div className="about-card mx-3">
              <img src="/2663543.jpg" alt="Hello"></img>
              <h1>250+ MILLION</h1>
              <h3>App Downloads</h3>
            </div>
          </div>
        </section>
        <section
          className="container is-fluid"
          style={{
            height: "80vh",
            backgroundColor: "#ff6f01",
          }}
        >
          <div
            className="columns"
            style={{
              position: "absolute",
              left: "10%",
              top: "28%",
            }}
          >
            <div className="column">
              <h1 className="title" style={{ color: "white" }}>
                Our Core Values
              </h1>
              <p style={{ color: "white" }}>
                Enim praesentium ut rerum recusandae autem consectetur unde
                illum a adipisci quidem minima, incidunt, dicta culpa impedit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quod accusamus incidunt ipsam. Enim praesentium ut rerum
                recusandae autem consectetur unde illum a adipisci quidem
                minima, incidunt, dicta culpa impedit!
              </p>
            </div>
            <div className="column">
              <img src="/24320.jpg" alt="Demo" style={{ height: "400px" }} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
