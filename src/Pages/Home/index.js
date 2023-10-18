import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "../../Grid";
import axios from "axios";
import { useMutation } from "react-query";
import TopBar from "../../Components/TopBar";
import HeroBlock from "../../Components/HeroBlock";
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
    <>
      <TopBar />
      <HeroBlock />
    </>
  );
};

export default Home;
