import linkedin from "../assets/logos/linkedin.svg";
import facebook from "../assets/logos/facebook.svg";
import instagram from "../assets/logos/instagram.svg";

import { Author } from "../shared";

function Copy() {
  return (
    <div className="flex justify-between items-center p-28 py-20">
      <p className="text-2xl">
        © Made with love - By <Author />
      </p>
      <ul className="flex gap-3">
        <li>
          <a
            href="https://www.linkedin.com/in/abdulrahman-abdulhak-76063b222"
            target="_blank"
          >
            <img src={linkedin} alt="" className="size-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/abdulrahman.abdulhak.11"
            target="_blank"
          >
            <img src={facebook} alt="" className="size-6" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/abdulrahman_abhaq" target="_blank">
            <img src={instagram} alt="" className="size-6" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Copy;
