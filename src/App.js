import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Room from './pages/Room'

/**
 * @module App
 * @desc Ce composant gère la navigation de l'application en utilisant React Router. Il définit les différentes routes de l'application
 * et utilise les composants `Layout`, `Home`, `About`, `Error` et `Room` pour afficher le contenu de chaque page.
 * @returns {React.Fragment} - Rendu du composant
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='room/:roomId' element={<Room />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
