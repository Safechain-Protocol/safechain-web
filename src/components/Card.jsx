const Card = ({ title, content }) => {
  return (
    <div className="d-flex flex-column mx-2 custom-card">
      <p className="card-title">{title}</p>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;
