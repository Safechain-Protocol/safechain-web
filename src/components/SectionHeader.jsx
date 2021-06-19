const SectionHeader = ({ text, grey = true }) => {
  return (
    <>
      {grey ? (
        <div className="d-flex flex-column align-items-center bg-grey p-5">
          <p className="section-header-text text-center">{text}</p>
          <div className="section-header-line"></div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <p className="section-header-text text-center">{text}</p>
          <div className="section-header-line"></div>
        </div>
      )}
    </>
  );
};

export default SectionHeader;
