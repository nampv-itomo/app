import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import TracNghiem from "./pages/TracNghiem";
import MusicPlayer from "./pages/MusicPlayer";
import Intro from "./pages/Intro";
import LoiBacDay from "./pages/LoiBacDay";
import TruyenThong from "./pages/TruyenThong";
import PKKQ from "./pages/TruyenThong/PKKQ";
import TrungDoan64 from "./pages/TruyenThong/TrungDoan64";
import SuDoan361 from "./pages/TruyenThong/SuDoan361";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tracnghiem" element={<TracNghiem />} />
          <Route path="/baihat" element={<MusicPlayer />} />
          <Route path="/loibacday" element={<LoiBacDay />} />
          <Route path="/truyenthong" element={<TruyenThong />} />
          <Route path="/truyenthong/quanchungpkkq" element={<PKKQ />} />
          <Route path="/truyenthong/trungdoan64" element={<TrungDoan64 />} />
          <Route path="/truyenthong/sudoan361" element={<SuDoan361 />} />
        </Routes>
        <ToastContainer />
      </div>
    </HashRouter>
  );
}

export default App;
