import { useCallback, useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Map from "./Map";
import Download from "./Download";

function App() {
  const [active, setActive] = useState(1);
  const SetView = useCallback((active) => {
    setActive(active);
  }, []);

  const ActionView = () => {
    switch (active) {
      case 1:
        return <Main />;
      case 2:
        return <Map />;
      case 3:
        return <Download />;
      default:
        return <Main />;
    }
  };

  return (
    <div class="container bg-[url('https://wallpapercave.com/wp/wp2868363.jpg')] bg-no-repeat bg-cover">
      <Header onPage={SetView} />
      {ActionView()}
      <Footer />
    </div>
  );
}

export default App;
