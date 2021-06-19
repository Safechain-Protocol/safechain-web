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
        <SectionHeader text="An option for anyone" grey={false} />
      </div>

      <p className="footer-text">
        MetaVault is available for Windows, Mac, iOS, and Android with support
        for all their respective major browsers, including Microsoft Edge.
      </p>

      <div className="d-flex mb-5">
        <CircularIcon link="https://www.google.com" icon={TelegramIcon} />
        <CircularIcon link="https://www.google.com" icon={InstaIcon} />
        <CircularIcon link="https://www.google.com" icon={TwitterIcon} />
        <CircularIcon link="https://www.google.com" icon={RedditIcon} />
      </div>

      <p className="text-black footer-copyright">
        Copyright © 2021 MetaVault. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
