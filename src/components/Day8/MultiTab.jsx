import React, { useState, useEffect } from "react";

export const MultiTab = () => {
  const [showData, setShowData] = useState("posts");
  const [data, setData] = useState([]);

  // handles all button click events
  const handleClick = (type) => {
    //set state data
    setShowData(type);
  };

  // apply use effect
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${showData}`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [showData]);

  return (
    <div>
      <button onClick={() => handleClick("posts")}>Posts</button>
      <button onClick={() => handleClick("users")}>Users</button>
      <button onClick={() => handleClick("comments")}>Comments</button>
      <div>
        {data.length > 0 && (
          <ul>
            {/*  */}
            {data.slice(0, 10).map((item) => (
              <li key={item.id}>
                {showData === "posts" && item.title}
                {showData === "users" && item.name}
                {showData === "comments" && item.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
