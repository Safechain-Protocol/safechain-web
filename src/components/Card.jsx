const Card = ({ title, content }) => {
  return (
    <div
      data-aos="fade-in"
      className="d-flex flex-column mx-2 custom-card card"
    >
      <p className="card-title">{title}</p>
      <p className="card-content mt-2">{content}</p>
    </div>
  );
};

export default Card;
