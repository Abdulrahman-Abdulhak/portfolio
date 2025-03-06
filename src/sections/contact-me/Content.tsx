import { DotSeparatedList } from "../../shared";

const links = [
  { label: "mail", href: "mailto:bdalrhmanbdalhq@gmail.com" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/abdulrahman-abdulhak-76063b222",
  },
  { label: "about me", href: "#" },
];

function Content() {
  return (
    <main className="grid gap-7 px-14 max-w-4xl mx-auto py-32 font-league-spartan text-white">
      <h2 className="text-h2 capitalize text-center">Let’s Talk</h2>
      <p className="description text-content text-center">
        Want to work together or just chat over coffee? Drop me a message—I’d
        love to connect!
      </p>
      <DotSeparatedList
        items={links}
        className="lowercase text-content text-center"
        itemElement={(link) => (
          <a
            href={link.href}
            className="font-itim text-primary underline"
            target="_blank"
          >
            {link.label}
          </a>
        )}
      />
    </main>
  );
}

export default Content;
