import SectionHeader from "../components/SectionHeader";
import CircularIcon from "./CircularIcon";
import TelegramIcon from "../assets/telegram.svg";
import InstaIcon from "../assets/insta.svg";
import TwitterIcon from "../assets/twitter.svg";
import RedditIcon from "../assets/reddit.svg";

const Footer = () => {
  return (
    <div className="d-flex flex-column align-items-center border border-success">
      <div className="mt-5">
        <SectionHeader text="An option for anyone" />
      </div>

      <p className="footer-text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit Sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna adipiscing elit
        adipiscing elit aliquam erat volutpat. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit roay.{" "}
        <span className="text-violet">And it's free.</span>
      </p>

      <div className="d-flex mb-5">
        <CircularIcon icon={TelegramIcon} />
        <CircularIcon icon={InstaIcon} />
        <CircularIcon icon={TwitterIcon} />
        <CircularIcon icon={RedditIcon} />
      </div>

      <p className="text-black">
        Copyright © 2021 MetaVault. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
