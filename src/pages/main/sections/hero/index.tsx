import Background from "./Background";
import Content from "./Content";
import Foreground from "./Foreground";

function MainHero() {
  return (
    <header className="relative h-screen text-white">
      <Background />
      <Content />
      <Foreground />
    </header>
  );
}

export default MainHero;
