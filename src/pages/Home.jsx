import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import HeroIllustration from "../assets/hero.jpg";
import IllustrationOne from "../assets/info-section-one.png";
import IllustrationTwo from "../assets/info-section-two.png";
import IllustrationThree from "../assets/info-section-three.png";
import Mockup from "../assets/mockup.png";

const Home = () => {
  return (
    <div>
      <div className="hero-section container d-flex flex-wrap">
        <div className="col-md-6 d-flex flex-column justify-content-center hero-section-text-container">
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
        <div className="col-md-6 my-auto">
          <img
            className="hero-illustration img-fluid"
            src={HeroIllustration}
            alt="Hero Illustration"
          />
        </div>
      </div>

      <SectionHeader text="More than just a Vault, it's Decentralized." />
      <div className="mockup-image">
        <img className="img-fluid" src={Mockup} alt="Mockup" />
      </div>

      <SectionHeader text="What brings you MetaVault" />
      <div className="d-flex flex-column align-items-center w-100 mx-auto card-container">
        <div className="d-flex mx-auto mt-3 card-container w-100">
          <Card
            title="Difficult to remember and store passwords"
            content="Save time by logging into your accounts with a single click or tap. MetaVault brings you a secured way of all of your card, wallet, address and passwords with secured login share feature by simply recipient's email and tap on share."
          />
          <Card
            title="Worried about safety and privacy"
            content="MetaVault is a decentralized platform which means your data is yours. MetaVault gives your power to control your data at all times, transparently and safely. You are the only one who has access and can choose who can and can't look at it."
          />
          <Card
            title="Worrying about someone using your wallet"
            content="MetVault protects your data and support for two factor authetnication (2FA) to access your account. MetaVault conducts regular third-party security audits and is compliant with Privacy Sheild, HIPAA, GDPR, CCPA, and SOC 2 security standards."
          />
        </div>

        <p className="info-section-title mt-4">Your privacy in your hands</p>
      </div>

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
            MetaVault provides infrastructure security. It protects your data &
            privacy by using a password manager you can trust. <br />
            <br /> MetaVault conducts regular third-party security audits and is
            compliant with Privacy Shield, HIPAA, GDPR, CCPA, and SOC 2 security
            standards.
          </p>
        }
      />

      <InfoSection
        textSide="left"
        illustration={IllustrationTwo}
        title={
          <p>
            Login fast on every device <br /> with secured sharing access
          </p>
        }
        content={
          <p>
            Save time by logging into your accounts with a single click or tap.
            MetaVault is available on every OS. Web access and extensions for
            all major browsers mean you'll never lose another password!
          </p>
        }
      />

      <InfoSection
        textSide="right"
        illustration={IllustrationThree}
        title={
          <p>
            Online Safety and trusted <br /> with shield protection
          </p>
        }
        content={
          <p>
            We can’t and don’t want to see your data. Your file is encrypted and
            stored on your device, so we can’t access it. You are the only one
            who has access and can choose who can and can’t look at it. <br />
            <br />
            We gives you power to create & manage unique passwords, so u can
            strengthen privacy and boost productivity.
          </p>
        }
      />

      <Footer />
    </div>
  );
};

export default Home;
