import { useState } from "react";

const CircularIcon = ({ icon, hoverIcon, link }) => {
  const [hover, setHover] = useState(false);

  return (
    <a href={link}>
      {!hover && (
        <img
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`circular-icon mx-3 ${hover && "display-none"}`}
          src={icon}
          alt="Circular Icon"
        />
      )}
      {hover && (
        <img
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`circular-icon mx-3 ${!hover && "display-none"}`}
          src={hoverIcon}
          alt="Circular Icon"
        />
      )}
    </a>
  );
};

export default CircularIcon;
