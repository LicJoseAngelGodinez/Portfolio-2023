import { Routes, Route, HashRouter } from 'react-router-dom';

import Navbar from './components/navbar/navbar';

import Home from './pages/home/home';
import Test from './pages/test/test';
import NotFound from './pages/notfound/not-found';

import { setBackground } from './utils/app-utils';


function App() {
  setBackground();
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
