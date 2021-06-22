import { useState } from "react";

const CircularIcon = ({ icon, hoverIcon, link }) => {
  const [hover, setHover] = useState(false);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={`circular-icon mx-3`}
        src={!hover ? icon : hoverIcon}
        // src={icon}
        alt="Circular Icon"
      />
    </a>
  );
};

export default CircularIcon;
