import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import SocialMedia from "./SocialMedia";

function Header() {
  return (
    <section className="w-full px-4 py-4 sm:px-8 md:px-10 md:py-8 lg:px-20 xl:px-40">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-xl lg:text-2xl">A.K. portfolio</p>

        <nav className="hidden xs:block">
          <ul className="flex items-center gap-2 sm:gap-4 md:gap-8">
            <li className="text-xs sm:text-sm md:text-base lg:text-xl">
              <Link smooth to="/#projects">
                Projects
              </Link>
            </li>
            <li className="text-xs sm:text-sm md:text-base lg:text-xl">
              <Link smooth to="/#technologies">
                Techonolgies
              </Link>
            </li>
            <li className="text-xs sm:text-sm md:text-base lg:text-xl">
              <Link smooth to="/#aboutme">
                About me
              </Link>
            </li>
          </ul>
        </nav>

        <div className="sm:block">
          <SocialMedia />
        </div>
      </div>

      <nav className="mt-4 xs:hidden">
        <ul className="container flex items-center justify-between px-4">
          <li className="text-sm">
            <Link smooth to="/#projects">
              Projects
            </Link>
          </li>
          <li className="text-sm">
            <Link smooth to="/#technologies">
              Techonolgies
            </Link>
          </li>
          <li className="text-sm">
            <Link smooth to="/#aboutme">
              About me
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
