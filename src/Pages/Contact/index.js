import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uuid } from "uuidv4";
import { modifyInformation, setInformation } from "../../Redux/Actions";

const Contact = () => {
  const [infor, setInfor] = useState("");
  const [date, setDate] = useState("");
  console.log("🚀 ~ file: index.js:10 ~ Contact ~ date:", date);
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const infors = useSelector((state) => state.infors);
  console.log(infors);
  const handleSetInfor = () => {
    dispatch(setInformation({ id: Math.random(), data: infor, time: date }));
  };

  const handleModiInfor = () => {
    dispatch(modifyInformation({ id: id, data: infor }));
  };

  const handleClickInfor = (i, data) => {
    setInfor(data);
    setId(i);
  };
  return (
    <div>
      <div>Contact</div>
      <br></br>
      <input
        value={infor}
        placeholder="Enter your infor"
        onChange={(event) => {
          setInfor(event.target.value);
        }}
      />
      <button onClick={() => handleSetInfor()}>Submit</button>
      <button onClick={() => handleModiInfor()}>Modify</button>
      <Link to={"/"}>link to home</Link>

      {infors.map((i) => {
        return (
          <div key={i.id} onClick={() => handleClickInfor(i.id, i.data)}>
            {i.data}
          </div>
        );
      })}
      <input
        type="time"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </div>
  );
};

export default Contact;
