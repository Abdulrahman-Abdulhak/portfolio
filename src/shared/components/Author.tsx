import { xnor } from "../../core";

type props = {
  firstName?: boolean;
  lastName?: boolean;
};

function Author({ firstName, lastName }: props): React.ReactNode {
  if (xnor(firstName, lastName)) return <address>Abdulrahman Abdulhak</address>;
  return (
    <address className="inline">
      {firstName ? "Abdulrahman" : "Abdulhak"}
    </address>
  ); //? By using the xnor from before we ensured that if one is true the other is definitely false.
}

export default Author;
