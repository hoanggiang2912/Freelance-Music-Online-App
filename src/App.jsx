import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import Genres from './pages/Genres';
import GenresViewMore from './pages/Genres-ViewMore';
import TopTracks from './pages/TopTracks';
import Downloads from './pages/Downloads';
import History from './pages/History';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/view-more" element={<GenresViewMore />} />
          <Route path="/top-tracks" element={<TopTracks />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default App;
