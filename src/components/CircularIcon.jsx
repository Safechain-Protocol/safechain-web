import { useState } from "react";

const CircularIcon = ({ icon, hoverIcon, link }) => {
  const [hover, setHover] = useState(false);

  return (
    <img
      onClick={e => {
        e.preventDefault();
        window.location.href = link;
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`circular-icon mx-3 cursor-pointer`}
      src={!hover ? icon : hoverIcon}
      alt="Circular Icon"
    />
  );
};

export default CircularIcon;
