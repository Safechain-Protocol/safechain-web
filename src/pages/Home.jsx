import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import HeroIllustration from "../assets/hero.jpg";
import IllustrationOne from "../assets/info-section-one.png";
import IllustrationTwo from "../assets/info-section-two.png";
import IllustrationThree from "../assets/info-section-three.png";

const Home = () => {
  return (
    <div>
      <div className="border d-flex flex-wrap">
        <div className="border col-md-6 d-flex flex-column justify-content-center">
          <p className="hero-title">
            Simple and Secure <br /> All Dimensional VAULT
          </p>
          <p className="hero-subtitle mt-3">
            A single place for all of your passwords, cards, addresses <br />{" "}
            and wallets.
          </p>

          <div className="mt-3">
            <Button text="Getting Started" />
          </div>
        </div>
        <div className="border col-md-6">
          <img
            className="hero-illustration"
            src={HeroIllustration}
            alt="Hero Illustration"
          />
        </div>
      </div>

      <div className="d-flex mx-auto card-container">
        <Card
          title="Difficult to remember and store passwords"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit
Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        />
        <Card
          title="Difficult to remember and store passwords"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit
Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        />
        <Card
          title="Difficult to remember and store passwords"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit
Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        />
      </div>

      <SectionHeader text="More than just a Vault, it's Decentralized." />
      <SectionHeader text="What brings you MetaVault" />

      <SectionHeader text="How it works" />
      <InfoSection
        textSide="right"
        illustration={IllustrationOne}
        title={
          <p>
            Enterprise-Grade Security <br /> and Compliance
          </p>
        }
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit Sed diam
            nonummy nibh euismod tincidunt <br />
            ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit
            amet volutpat.
          </p>
        }
      />

      <InfoSection
        textSide="left"
        illustration={IllustrationTwo}
        title={
          <p>
            Enterprise-Grade Security <br /> and Compliance
          </p>
        }
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit Sed diam
            nonummy nibh euismod tincidunt <br />
            ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit
            amet volutpat.
          </p>
        }
      />

      <InfoSection
        textSide="right"
        illustration={IllustrationThree}
        title={
          <p>
            Enterprise-Grade Security <br /> and Compliance
          </p>
        }
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit Sed diam
            nonummy nibh euismod tincidunt <br />
            ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit
            amet volutpat.
          </p>
        }
      />

      <Footer />
    </div>
  );
};

export default Home;
