import girlVector from "../../../../assets/graphics/girl-vector.svg";
import { ButtonBulging } from "../../../shared";

function Content() {
  return (
    <div className="size-full flex items-center px-8 py-14">
      <section className="grow ms-7">
        <h2 className="text-h1 capitalize font-bold">
          Hi there, I'm Abdulrahman!
        </h2>
        <p className="mt-8 mb-14 text-content">
          A Full-Stack Software Engineer who loves building things that work
          beautifully, inside and out. Let’s create something awesome together!
        </p>
        <ButtonBulging onclick={() => {}} label={"Learn More"} />
      </section>
      <img src={girlVector} alt="" className="translate-y-10" />
    </div>
  );
}

export default Content;
