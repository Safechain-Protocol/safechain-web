import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border navbar navbar-expand-lg navbar-light p-3">
      <a
        className="navbar-brand-text navbar-brand footer-logo text-purple text-violet"
        href="/"
      >
        <p className="text-violet font-weight-bold ml-3 my-auto mont-bold">
          MetaVault
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
          <a href="/">
            <p className="text-violet mont-bold font-weight-bold h-100 d-flex align-items-center ml-3 mr-5 mobile-extra-top-margin">
              Getting Started
            </p>
          </a>
          <div className="ml-3">
            <Button text="Login" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
