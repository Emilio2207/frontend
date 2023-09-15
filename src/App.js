import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./layout/index";

import IndexPage from "./pages/IndexPage";

//import './App.css';

//los componentes siempre empiezan en mayusculas.
function App() {
  return (
    <div className="App"> 
      <Index/>

      <BrowserRouter>
      <Routes>
        <Route path="index" element = {<IndexPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
