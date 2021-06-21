const Card = ({ icon, title, content }) => {
  return (
    <div
      data-aos="fade-in"
      className="d-flex flex-column mx-2 custom-card card"
    >
      <div className="d-flex align-items-center  mb-1">
        <img className="my-auto" src={icon} alt="Card Icon" />
        <p className="ml-3 card-title">{title}</p>
      </div>
      <p className="card-content mt-2">{content}</p>
    </div>
  );
};

export default Card;
