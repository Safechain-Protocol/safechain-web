import SectionHeader from "../components/SectionHeader";
import CircularIcon from "./CircularIcon";
import TelegramIcon from "../assets/telegram.svg";
import InstaIcon from "../assets/insta.svg";
import TwitterIcon from "../assets/twitter.svg";
import RedditIcon from "../assets/reddit.svg";

const Footer = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="mt-5">
        <SectionHeader text="When Will Be Able To Use" grey={false} />
      </div>

      <p className="footer-text roboto-regular">
        There will be a chrome extension similar to metamask which can be used
        to access the digital safe. While using it first time, you can generate
        a safe (blockchain wallet) and store the private key/seed phrase for
        future references. <br />
        <br />
        Post that, you can put any secret information and send the txn on
        blockchain on periodic basis to store it there. You can login from
        digital safe anytime/anywhere and retrieve the private keys/password
        from blockchain.
      </p>

      <div className="d-flex mb-5">
        {/* Gitcoin, Medium, Twitter, Discord */}
        <CircularIcon link="https://www.google.com" icon={TwitterIcon} />
      </div>

      <p className="text-black footer-copyright">
        Copyright © 2021 MetaVault. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
