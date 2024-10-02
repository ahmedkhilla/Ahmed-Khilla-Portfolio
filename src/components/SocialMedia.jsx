import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FACEBOOK, GITHUB, LINKEDIN } from "../constants/cons";

function SocialMedia() {
  return (
    <ul className="flex items-center gap-4 md:gap-2">
      <li className="text-xl">
        <a href={LINKEDIN} target="_blank">
          <FaLinkedin />
        </a>
      </li>
      <li className="text-xl">
        <a href={GITHUB} target="_blank">
          <FaGithub />
        </a>
      </li>
      <li className="text-xl">
        <a href={FACEBOOK} target="_blank">
          <FaFacebookSquare />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
