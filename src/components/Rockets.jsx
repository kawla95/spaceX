import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Rockets = () => {
  const [rocketData, setRocketData] = useState([]);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/rockets").then((res) => {
      setRocketData(res.data);
      return res.data;
    });
  }, []);
  return (
    <div>
      <Link to={"/"}>
        <button type="button" className="btn btn-danger m-3">
          Back to Homepage
        </button>
      </Link>
      <div className="rocketSection">
        {rocketData.map((rocket) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={rocket.flickr_images[0]}
                className="card-img-top"
                alt=""
              ></img>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "black" }}>
                  {rocket.name}
                </h5>
                <p className="card-text" style={{ color: "black" }}>
                  {rocket.description}
                </p>
                <a
                  href={rocket.wikipedia}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rockets;
