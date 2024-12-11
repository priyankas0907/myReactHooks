import React, { useState, useRef, useEffect } from "react";

const PersistStateExample = () => {
  const [name, setName] = useState("Priyanka");
  const prevName = useRef(null);

  useEffect(() => {
    prevName.current = name;
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>{prevName.current + "=>" + name}</div>
    </>
  );
};

export default PersistStateExample;
