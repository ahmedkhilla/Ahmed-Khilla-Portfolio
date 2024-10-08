import { FaTelegramPlane } from "react-icons/fa";
import { email } from "../constants/cons";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <section className="px-6 pb-12 xs:px-8 sm:px-16 md:px-6 lg:px-20 xl:px-40">
      <div className="container mx-auto">
        <div className="md:hidden">
          <div className="mb-4 flex justify-between">
            <p className="bg-border-gradient bg-clip-text text-sm font-medium text-transparent">
              Feel free to contact me
            </p>
            <SocialMedia />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium tracking-tight">
              <a href={`mailto:${email}`}>ah.khilla97@gmail.com</a>
            </p>

            <p className="text-sm font-medium tracking-tight">
              <a
                href="https://t.me/ahmedkhilla"
                className="flex items-center gap-1"
              >
                <span>
                  <FaTelegramPlane />
                </span>
                <span> @ahmedkhilla</span>
              </a>
            </p>
          </div>
        </div>

        <div className="mb-4 hidden justify-between md:flex">
          <p className="bg-border-gradient bg-clip-text text-sm font-medium text-transparent">
            Feel free to contact me
          </p>
          <p className="text-sm font-medium tracking-tight">
            <a href={`mailto:${email}`}>ah.khilla97@gmail.com</a>
          </p>
          <p className="text-sm font-medium tracking-tight">
            <a
              href="https://t.me/ahmedkhilla"
              className="flex items-center gap-1"
            >
              <span>
                <FaTelegramPlane />
              </span>
              <span> @ahmedkhilla</span>
            </a>
          </p>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}

export default Footer;
