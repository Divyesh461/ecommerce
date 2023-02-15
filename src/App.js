import './App.css';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Api from './Pages/Api';
import Api1 from './Pages/Api1';
import Api2 from './Pages/Api2';
import Amazon from './Pages/Amazon';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/api' element={<Api/>} />
          <Route exact path='/api-1' element={<Api1/>} />
          <Route exact path='/api-2' element={<Api2/>} />
          <Route exact path='/amazon' element={<Amazon/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
