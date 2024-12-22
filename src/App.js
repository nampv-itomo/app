import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import TracNghiem from "./TracNghiem";
import BaiHat from "./BaiHat";

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
