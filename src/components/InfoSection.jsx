const InfoSection = ({ title, content, illustration, textSide }) => {
  return (
    <div
      className={`border d-flex flex-wrap ${textSide === "left" && "bg-grey"}`}
    >
      <div className="border col-md-6 p-0 m-0">
        {textSide === "left" ? (
          <img src={illustration} alt="Info Section Illustration" />
        ) : (
          <div className="h-100 d-flex flex-column justify-content-center border p-5">
            <p className="info-section-title">{title}</p>
            <p className="info-section-content">{content}</p>
          </div>
        )}
      </div>
      <div className="border col-md-6 p-0 m-0 d-flex flex-column">
        {textSide === "left" ? (
          <div className="h-100 d-flex flex-column justify-content-center border p-5">
            <p className="info-section-title">{title}</p>
            <p className="info-section-content">{content}</p>
          </div>
        ) : (
          <>
            <img src={illustration} alt="Info Section Illustration" />
          </>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
