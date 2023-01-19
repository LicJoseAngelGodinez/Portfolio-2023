import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Test from './pages/test/test';
import NotFound from './pages/notfound/not-found';

import './assets/icons-monkey/see-monkey.webp';
import './assets/icons-monkey/hear-monkey.webp';
import './assets/icons-monkey/speak-monkey.webp';

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
