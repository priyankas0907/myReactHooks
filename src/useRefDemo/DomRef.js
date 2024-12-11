import React, { useRef } from "react";

const DomRef = () => {
  const inputRef = useRef(null);

  const onFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={onFocus}>Focus</button>
    </>
  );
};

export default DomRef;
