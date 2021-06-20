import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import HeroIllustration from "../assets/hero.jpg";
import IllustrationOne from "../assets/info-section-one.svg";
import IllustrationTwo from "../assets/info-section-two.svg";
import IllustrationThree from "../assets/info-section-three.svg";
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

          <div
            className="mt-3"
            onClick={e => {
              e.preventDefault();
              window.location.href = "https://www.google.com";
            }}
          >
            <Button text="Support Us on GitCoin" />
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

      <SectionHeader text="How Does It Work" />
      <div className="mockup-image">
        <img className="img-fluid" src={Mockup} alt="Mockup" />
      </div>

      <SectionHeader text="Key Features of SafeChain" />
      <div className="d-flex flex-column align-items-center w-100 mx-auto card-container">
        <div className="d-flex mx-auto mt-3 card-container w-100">
          <Card
            title="All your private keys are stored on blockchain"
            content="All your private keys are encrypted using AES-encryption and generated public keys which are stored on the blockchain. Data is stored there forever and there is no cost of accessing the raw data."
          />
          <Card
            title="Only you have access to the raw data key"
            content="Best part is your data is more secured than standard SHA encryption used to generate private public key pairs of wallets. Only you can have access to it as long as your ‘digital safe’ keys are secured."
          />
          <Card
            title="Works for all blockchain wallets/private keys"
            content="Be it netflix password or your primary blockchain wallet, it works for anything and everything. All you need to do is get it encrypted with help of our ‘digital safe’ and store the publicly generated data on blockchain."
          />
        </div>

        {/* <p className="info-section-title mt-4 oxygen-regular">
          Your privacy in your hands
        </p> */}
      </div>

      <SectionHeader text="How Secure Is SafeChain" />
      {/* <p className="footer-text mx-auto">
        Safechain uses AES symmetric encryption to encrypt your sensitive
        information before storing it on blockchain. To store the information,
        it requires one txn. Once data is stored, one can see the encrypted
        information but can’t access the data until they get the private key of
        ‘digital safe’. So as long as your digital safe’s private key is secure,
        it is more secure to storing your sensitive data in google sheets, email
        or any other methods.
      </p> */}

      <InfoSection
        textSide="right"
        illustration={IllustrationOne}
        title={<p>Purely decentralized and known non-custodial wallet</p>}
        content={
          <p>
            Our 'digital safe' is first of its kind and purely decentralised. No
            one has access to the data except the one who owns its private key.
            So instead of saving 50 wallet’s private keys, you need to store key
            of just one safe/wallet.
          </p>
        }
      />

      <InfoSection
        textSide="left"
        illustration={IllustrationTwo}
        title={
          <p>
            Using AES Encryption which is more secure than private keys
            encrpytion (SHA)
          </p>
        }
        content={
          <p>
            Safechain uses AES symmetric encryption to encrypt your sensitive
            information before storing it on blockchain. To store the
            information, it requires just one blockchain transaction. Once data
            is stored, anyone can see the encrypted information
            <span className="font-weight-bold">
              {" "}
              but can’t access the raw data{" "}
            </span>
            until they get the private key of ‘digital safe’. So as long as your
            digital safe’s private key is secure, it is more secure to storing
            your sensitive data in google sheets, email or any other methods.
          </p>
        }
      />

      {/* <InfoSection
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
      /> */}

      <div className="bg-grey d-flex flex-column align-items-center w-100 mx-auto card-container">
        <p className="info-section-title mt-4 oxygen-bold">Roadmap</p>

        <div className="d-flex mx-auto mt-3 card-container w-100">
          <Card
            title="Q2 2021"
            content={
              <p>
                Doing POC on ETH blockchain <br />
                Apply for GitCoin to get community support
              </p>
            }
          />
          <Card
            title="Q3 2021"
            content={
              <p>
                Create chrome extension (like MetaMask) <br />
                Provide support to store wallet private keys on all blockchains
              </p>
            }
          />
          <Card
            title="Q4 2021"
            content="Provide support for other sensitive information (accounts passwords, secret data etc)"
          />
          <Card
            title="Q1 2022"
            content="Launch governance token and hand it over to the community"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
