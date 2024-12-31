import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";

const App = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default App;
