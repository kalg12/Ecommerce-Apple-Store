import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Ipad from './pages/Ipad';
import Iphone from './pages/Iphone';
import Login from './pages/Login';
import Mac from './pages/Mac';
import NotFound from './pages/NotFound';
import Watch from './pages/Watch';
import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState({
    shopping: [],
  });

  return (
    <>
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/watch" element={<Watch />} />
          <Route exact path="/mac" element={<Mac />} />
          <Route exact path="/ipad" element={<Ipad />} />
          <Route exact path="/iphone" element={<Iphone />} />
          <Route path="/" element={<Home />} />
          <Route exact  path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}
export default App;