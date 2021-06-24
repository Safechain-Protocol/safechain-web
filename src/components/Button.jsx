const Button = ({ text, hero = false }) => {
  return <button className={`custom-button ${hero && 'hero-btn'}`}>{text}</button>;
};

export default Button;
