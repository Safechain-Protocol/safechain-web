const SectionHeader = ({ text }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <p className="section-header-text">{text}</p>
      <div className="section-header-line"></div>
    </div>
  );
};

export default SectionHeader;
