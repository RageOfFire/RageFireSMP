import { component } from 'react'
import { Routes, Route } from  'react-router-dom';
import Main from "./pages/Main";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Map from "./pages/Map";
import Analytics from "./pages/Analytics";
import Download from "./pages/Download";
import Town from './pages/helps/Town';
import Shop from './pages/helps/Shop';
import Skin from './pages/helps/Skin';
import Lock from './pages/helps/Lock';
import Random from './pages/helps/Random';

function App() {

  return (
    <div className="bg-[url('https://wallpapercave.com/wp/wp2868363.jpg')] bg-no-repeat bg-cover">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/map' element={<Map />} />
        <Route path='/download' element={<Download />} />
        <Route path='/helps/Town' element={<Town />} />
        <Route path='/helps/Shop' element={<Shop />} />
        <Route path='/helps/Lock' element={<Lock />} />
        <Route path='/helps/Skin' element={<Skin />} />
        <Route path='/helps/TP' element={<Random />} />
        <Route path='/analytics' element={<Analytics />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
