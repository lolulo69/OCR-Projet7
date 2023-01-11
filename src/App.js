import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
