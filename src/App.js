import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TracNghiem from "./pages/TracNghiem";
import BaiHat from "./pages/BaiHat";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracnghiem" element={<TracNghiem />} />
          <Route path="/baihat" element={<BaiHat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
