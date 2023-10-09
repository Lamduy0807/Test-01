import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "../Components/Grid";
import axios from "axios";
import { useMutation } from "react-query";
/**
 *
 * Redux: 3 thành phần
 * 1. Actions =>
 * aysnc/ await => bất đồng bộ
 * get => GET restful API
 * post => POST
 * create => PUT
 */
const fetchingPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return res.data;
};

const Home = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const mutation = useMutation((payload) => {
    axios.post("https://jsonplaceholder.typicode.com/posts", payload);
  });

  if (mutation.isLoading) return <div>loading...</div>;

  if (mutation.isError) return <div>{mutation.error.message}</div>;

  if (mutation.isSuccess) return window.alert("Thành công!!");

  return (
    <div>
      <div>Home</div>
      <Link to={"contact"}>Link to contact</Link>

      {/* {infors.map((infor) => {
        return (
          <div key={infor.id}>
            data: {infor.data}, time: {infor.time}
          </div>
        );
      })} */}
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Enter title"
      />

      <input
        type="text"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
        placeholder="Enter body"
      />

      <button
        onClick={() => {
          mutation.mutate({ title, body });
        }}
      >
        submit
      </button>
    </div>
  );
};

export default Home;
