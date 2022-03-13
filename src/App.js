import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Iphone from './pages/Iphone';
import NotFound from './pages/NotFound';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/iphone" element={<Iphone />} />
          <Route path="/" element={<Home />} />
          <Route exact  path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;