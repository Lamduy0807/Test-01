import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/**
 *
 * Redux: 3 thành phần
 * 1. Actions =>
 */
const Home = () => {
  const infors = useSelector((state) => state.infors);
  console.log("🚀 ~ file: index.js:11 ~ Home ~ infors:", infors);

  return (
    <div>
      <div>Home</div>
      <Link to={"contact"}>Link to contact</Link>

      {infors.map((infor) => {
        return (
          <div key={infor.id}>
            data: {infor.data}, time: {infor.time}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
