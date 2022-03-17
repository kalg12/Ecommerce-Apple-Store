import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Ipad from './pages/Ipad';
import Iphone from './pages/Iphone';
import Mac from './pages/Mac';
import NotFound from './pages/NotFound';
import Watch from './pages/Watch';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exac path="/watch" element={<Watch />} />
          <Route exact path="/mac" element={<Mac />} />
          <Route exact path="/ipad" element={<Ipad />} />
          <Route exact path="/iphone" element={<Iphone />} />
          <Route path="/" element={<Home />} />
          <Route exact  path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
  );
}
export default App;