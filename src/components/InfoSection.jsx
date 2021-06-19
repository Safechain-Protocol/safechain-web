const InfoSection = ({ title, content, illustration, textSide }) => {
  return (
    <div className={`d-flex flex-wrap ${textSide === "left" && "bg-grey"}`}>
      {textSide === "right" && (
        <div className="d-flex flex-wrap">
          <div className="col-md-6 p-0 m-0 desktop-div">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <p className="info-section-title">{title}</p>
              <p className="info-section-content">{content}</p>
            </div>
          </div>
          <div className="col-md-6 p-0 m-0 text-right desktop-div">
            <img
              className="img-fluid w-100"
              src={illustration}
              alt="Info Section Illustration"
            />
          </div>

          <div className="col-md-6 p-0 m-0 mobile-div">
            <img
              className="img-fluid w-100"
              src={illustration}
              alt="Info Section Illustration"
            />
          </div>
          <div className="col-md-6 p-0 m-0 text-right mobile-div">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <p className="info-section-title">{title}</p>
              <p className="info-section-content">{content}</p>
            </div>
          </div>
        </div>
      )}

      {textSide === "left" && (
        <>
          <div className="col-md-6 p-0 m-0">
            <img
              className="img-fluid w-100"
              src={illustration}
              alt="Info Section Illustration"
            />
          </div>
          <div className="col-md-6 p-0 m-0 text-left">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <p className="info-section-title">{title}</p>
              <p className="info-section-content">{content}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoSection;
