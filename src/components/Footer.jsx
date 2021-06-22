import SectionHeader from "../components/SectionHeader";
import CircularIcon from "./CircularIcon";

import GitcoinIcon from "../assets/gitcoin.png";
import TwitterIcon from "../assets/twitter.png";
import MediumIcon from "../assets/medium.png";
import DiscordCoin from "../assets/discord.png";

import GitcoinIconHover from "../assets/gitcoinhover.png";
import TwitterIconHover from "../assets/twitterhover.png";
import MediumIconHover from "../assets/mediumhover.png";
import DiscordIconHover from "../assets/discordhover.png";

const Footer = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="mt-5">
        <SectionHeader text="When available for use" grey={false} />
      </div>

      <p className="footer-text roboto-regular mx-auto">
        There will be a chrome extension similar to MetaMask which can be used
        to access the digital safe. While using it first time, you can generate
        a safe (blockchain wallet) and store the private key/seed phrase for
        future references. <br />
        <br />
        Post that, you can put any secret information and send the blockchain
        transaction on blockchain as per your requirement to store it there. You
        can login from digital safe anytime/anywhere and retrieve the private
        keys/password from blockchain.
      </p>

      <div className="d-flex mb-5">
        <CircularIcon
          link="https://gitcoin.co/grants/2982/safechain"
          icon={GitcoinIcon}
          hoverIcon={GitcoinIconHover}
        />
        <CircularIcon
          link="https://medium.com/@Safechain_Official"
          icon={MediumIcon}
          hoverIcon={MediumIconHover}
        />
        <CircularIcon
          link="https://twitter.com/safechain_"
          icon={TwitterIcon}
          hoverIcon={TwitterIconHover}
        />
        <CircularIcon
          link="https://discord.gg/2wHt6wMPS5"
          icon={DiscordCoin}
          hoverIcon={DiscordIconHover}
        />
      </div>

      <p className="text-black footer-copyright">
        Copyright © 2021 Safechain. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
