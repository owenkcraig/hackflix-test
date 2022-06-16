import './App.css';
import Catalogue from './Catalogue';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import ErrorPage from './ErrorPage';

function App() {

  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>

      <Routes>
        <Route path="/" element={ <Catalogue /> } />
        <Route path="/movie/:movieID" element={ <MovieDetails /> } />
        <Route path="*" element={ <ErrorPage /> } /> 
      </Routes>
    </div>
  );
}

export default App;
