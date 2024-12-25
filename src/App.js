import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Home from "./pages/Home";
import TracNghiem from "./pages/TracNghiem";
import MusicPlayer from "./pages/MusicPlayer";
import Demo from "./pages/Demo";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracnghiem" element={<TracNghiem />} />
          <Route path="/baihat" element={<MusicPlayer />} />
          <Route path="/music" element={<Demo />} />
        </Routes>
        <ToastContainer />
      </div>
    </HashRouter>
  );
}

export default App;
