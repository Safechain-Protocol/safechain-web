import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import HeroIllustration from "../assets/hero.svg";
import IllustrationOne from "../assets/info-section-one.svg";
import IllustrationTwo from "../assets/info-section-two.svg";
import IllustrationThree from "../assets/info-section-three.svg";
import Q1Icon from "../assets/q1.svg";
import Q2Icon from "../assets/q2.png";
import Q3Icon from "../assets/q3.svg";
import Q4Icon from "../assets/q4.svg";
import Mockup from "../assets/mockup.png";

const Home = () => {
  return (
    <div>
      <div
        data-aos="fade-in"
        className="hero-section container d-flex flex-wrap"
      >
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

      <SectionHeader text="How does it work" />
      <div data-aos="fade-in" className="mockup-image">
        <img className="img-fluid" src={Mockup} alt="Mockup" />
      </div>

      <SectionHeader text="Key Features of SafeChain" />
      <div
        data-aos="fade-in"
        className="d-flex flex-column align-items-center w-100 mx-auto card-container"
      >
        <div className="d-flex mx-auto mt-3 card-container w-100">
          <Card
            icon={Q1Icon}
            title="All your private keys are stored on blockchain"
            content="All your private keys are encrypted using an industry standard AES-encryption, keeping your data secure even on the blockchain. Data is stored there forever and there is no cost of accessing your data."
          />
          <Card
            icon={Q4Icon}
            title="Only you have access to your data"
            content="Even if the data is visible to everyone on blockchain, no one else other than you can make sense out of it as it is encrypted. Only you have access to it as long as your ‘digital safe’ key is secured."
          />
          <Card
            icon={Q3Icon}
            title="Works for all blockchain wallets and private keys"
            content="Be it Netflix password or your primary blockchain wallet, it works for anything and everything. All you need to do is get it encrypted with help of our ‘digital safe’ and store the publicly generated data on blockchain."
          />
        </div>

        {/* <p className="info-section-title mt-4 oxygen-regular">
          Your privacy in your hands
        </p> */}
      </div>

      <div data-aos="fade-in">
        <SectionHeader text="How secure is SafeChain" />
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
          title={<p>Purely decentralized and non-custodial wallet</p>}
          content={
            <p>
              Our 'digital safe' is first of its kind and purely decentralised.
              No one has access to the data except the one who owns its private
              key. No hassles to maintain your wallet private keys. Just keep
              one safe, and leave the rest to us.
            </p>
          }
        />

        <InfoSection
          textSide="left"
          illustration={IllustrationTwo}
          title={
            <p>
              Using an industry standard AES-encryption keeping your data secure
            </p>
          }
          content={
            <p>
              Safechain uses AES symmetric encryption to encrypt your sensitive
              information before storing it on blockchain. To store the
              information, it requires just one blockchain transaction. Once
              data is stored, anyone can see the encrypted information
              <span className="font-weight-bold">
                {" "}
                but can’t access the raw data{" "}
              </span>
              until they get the private key of ‘digital safe’. So as long as
              your digital safe’s private key is secure, it is more safe than
              storing your sensitive data on google sheets, email or any other
              data source.
            </p>
          }
        />
      </div>

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

      <div
        data-aos="fade-in"
        className="bg-grey d-flex flex-column align-items-center w-100 mx-auto card-container"
      >
        <p className="info-section-title mt-4 oxygen-bold">Roadmap</p>

        <div class="timeline">
          <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            <div class="timeline__event__icon ">
              <i class="lni-cake"></i>
            </div>
            <div class="timeline__event__date">Q2 2021</div>
            <div class="timeline__event__content ">
              {/* <div class="timeline__event__title">Birthday</div> */}
              <div class="timeline__event__description">
                <p>
                  • Doing POC on ETH blockchain <br />• Apply for GitCoin to get
                  community support
                </p>
              </div>
            </div>
          </div>
          <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <div class="timeline__event__icon">
              <i class="lni-burger"></i>
            </div>
            <div class="timeline__event__date">Q3 2021</div>
            <div class="timeline__event__content">
              {/* <div class="timeline__event__title">Lunch</div> */}
              <div class="timeline__event__description">
                <p>
                  • Create chrome extension (like MetaMask) <br />• Provide
                  support to store wallet private keys on all blockchains
                </p>
              </div>
            </div>
          </div>
          <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <div class="timeline__event__icon">
              <i class="lni-slim"></i>
            </div>
            <div class="timeline__event__date">Q4 2021</div>
            <div class="timeline__event__content">
              {/* <div class="timeline__event__title">Exercise</div> */}
              <div class="timeline__event__description">
                <p>
                  • Provide support for other sensitive information (accounts
                  passwords, secret data etc)
                </p>
              </div>
            </div>
          </div>
          <div class="timeline__event animated fadeInUp timeline__event--type1">
            <div class="timeline__event__icon">
              <i class="lni-cake"></i>
            </div>
            <div class="timeline__event__date">Q1 2022</div>
            <div class="timeline__event__content">
              {/* <div class="timeline__event__title">Birthday</div> */}
              <div class="timeline__event__description">
                <p>
                  • Launch governance token and hand it over to the community
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="d-flex mx-auto mt-3 card-container w-100">
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
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
