import './index.css';

import Catalogue from './Catalogue';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>

      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/movie/:movieID" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;