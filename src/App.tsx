import { MainPage } from "./pages";
import { ContactMe, Copy, NavBar } from "./sections";

function App() {
  return (
    <div className="font-league-spartan">
      <NavBar />
      <MainPage />
      <ContactMe />
      <Copy />
    </div>
  );
}

export default App;
