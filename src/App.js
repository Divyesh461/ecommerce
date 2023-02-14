import './App.css';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Api from './Pages/Api';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/api' element={<Api/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
