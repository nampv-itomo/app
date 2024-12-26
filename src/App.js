import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import TracNghiem from "./pages/TracNghiem";
import MusicPlayer from "./pages/MusicPlayer";
import Intro from "./pages/Intro";
import SongApp from "./component/components/App";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tracnghiem" element={<TracNghiem />} />
          <Route path="/baihat" element={<MusicPlayer />} />
          <Route path="/song" element={<SongApp />} />
        </Routes>
        <ToastContainer />
      </div>
    </HashRouter>
  );
}

export default App;
