import React, { useState } from "react";
import { Link } from "react-router-dom";
const CelebCard = (props) => {
  const [listcategory, setCategory] = useState(
    Array.isArray(props.category) ? props.category : []
  );
  return (
    <div
      style={{
        margin: "0 10px",
      }}
    >
      <div
        className="card card-bg mx-2 card-has-bg click-col pt-3"
        style={{
          // background: "linear-gradient(145deg, #8725fe, #FE66AB)",
          backgroundColor: "#00000000",
          // borderRadius: "15px",
          // padding: "2px",
          transform: `translateY(${
            props.index === 0 ? 10 : props.index % 2 !== 0 ? -10 : 10
          }px)`,
          // marginRight: `${props.cardGap}px`,
        }}
      >
        <div
          className="card card-img pt-3"
          style={{
            backgroundImage: `url("${props.image}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            height: `${props.cardHeight}px`,
          }}
        >
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              {/* Any content you want inside the card body */}
            </div>
            <div className="card-footer p-0">
              <div className="media">
                <div className="media-body" style={{ textAlign: "start" }}>
                  <Link to={`/profile/${props.regName}`}>
                    <h3 className="my-0 fs-5  text-white d-block">
                      {props.fullName}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-2 card-base"
        style={{
          zIndex: "5",
          width: "300px",
        }}
      >
        <div className="d-flex justify-content-start flex-wrap">
          {listcategory &&
            listcategory.map((value) => (
              <span key={value} className="badge badge-danger m-1">
                {value}
              </span>
            ))}
        </div>

        <div className="mt-2 px-2 text-secondary text-start">
          {props.platform}
        </div>
      </div>
    </div>
  );
};

export default CelebCard;
