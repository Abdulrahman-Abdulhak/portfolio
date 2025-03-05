import { ButtonBulging } from "../../shared";

function NavMenu() {
  return (
    <ul className="flex gap-5 font-itim">
      <li>
        <ButtonBulging label="about me" onclick={() => {}} />
      </li>
      <li>
        <ButtonBulging label="my projects" onclick={() => {}} />
      </li>
      <li>
        <ButtonBulging label="contact me" onclick={() => {}} />
      </li>
    </ul>
  );
}

export default NavMenu;
