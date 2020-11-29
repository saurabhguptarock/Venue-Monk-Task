import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container is-fluid absolute-center"
      style={{ position: "absolute", top: "43%", left: "38%" }}
    >
      <Link to="/about-us" className="button mx-4">
        About Us
      </Link>
      <Link to="/contact-us" className="button mx-4">
        Contact Us
      </Link>
    </div>
  );
};

export default Home;
