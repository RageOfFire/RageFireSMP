import { Routes, Route } from  'react-router-dom';
import Main from "./pages/Main";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Map from "./pages/Map";
import Download from "./pages/Download";

function App() {

  return (
    <div class="container bg-[url('https://wallpapercave.com/wp/wp2868363.jpg')] bg-no-repeat bg-cover">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/map' element={<Map />} />
        <Route path='/download' element={<Download />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
