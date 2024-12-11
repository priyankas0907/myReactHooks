import React, { useState, useEffect } from "react";

const UseEffectHookDemo = () => {
  const [resourceType, setResourceType] = useState("Posts");
  const [items,setItems] = useState([]);
  useEffect(() => {
    console.log("Mount");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    return(()=>{
        console.log("UnMount");
    })
  }, [resourceType]);

  return (
    <>
      <button onClick={() => setResourceType("Posts")}>Posts</button>
      <button onClick={() => setResourceType("Comments")}>Comments</button>
      <button onClick={() => setResourceType("Users")}>Users</button>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
};

export default UseEffectHookDemo;
