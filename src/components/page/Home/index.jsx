import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  //https://jsonplaceholder.typicode.com/users
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState([]);
  //useEffect() callback ComponentDidMount upDate return()  , dependency array []
  useEffect(() => {
    // console.log("this is useEffect hook")
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => console.err(err));
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment one
      </button>
      {userData.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </>
  );
}

export default Home;
