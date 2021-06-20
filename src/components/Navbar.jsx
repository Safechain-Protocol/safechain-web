import Button from "./Button";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="sticky-top border navbar navbar-expand-lg navbar-light p-3 bg-white">
      <a
        className="navbar-brand-text navbar-brand footer-logo text-purple text-violet"
        href="/"
      >
        <p className="text-violet font-weight-bold ml-3 my-auto mont-bold">
          <img height={32} src={Logo} alt="SafeChain Logo" />
        </p>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="mr-3 collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a href="/" className="nav-container">
            <p className="mt-3 nav-title text-violet mont-bold font-weight-bold h-100 d-flex align-items-center ml-3 mr-5 mobile-extra-top-margin">
              Home
            </p>
          </a>
          <a href="https://www.google.com" className="nav-container">
            <p className="mt-3 nav-title text-violet mont-bold font-weight-bold h-100 d-flex align-items-center ml-3 mr-5">
              Our Gitcoin Page
            </p>
          </a>
          <div
            className="ml-3 mt-2 mx-auto"
            onClick={e => {
              e.preventDefault();
              window.location.href = "https://medium.com/@Safechain_Official";
            }}
          >
            <Button text="Docs" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
