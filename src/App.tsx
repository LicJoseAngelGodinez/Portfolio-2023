import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Test from './pages/test/test';
import NotFound from './pages/notfound/not-found';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
