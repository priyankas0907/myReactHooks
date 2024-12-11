import React, {useState, useEffect} from "react";

const UseEffectWindowWidthExample = () => {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

const handleResize = () => {
    setWindowWidth(window.innerWidth);
}

useEffect(() => {
    console.log("mount");
    window.addEventListener('resize', handleResize);
    return(() => {
        console.log("unmount");
        window.removeEventListener('resize', handleResize);
    })
},[windowWidth]);

return (
    <div>{windowWidth}</div>
)
}

export default UseEffectWindowWidthExample;