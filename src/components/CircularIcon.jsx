const CircularIcon = ({ icon, link }) => {
  return (
    <a href={link}>
      <img className="circular-icon mx-3" src={icon} alt="Circular Icon" />
    </a>
  );
};

export default CircularIcon;
