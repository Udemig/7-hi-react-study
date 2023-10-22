import React, { useState } from "react";
import Sayac from "./pages/Sayac/Sayac";
import Form from './pages/Form/Form'
import './app.css'
const App = () => {
  const [page, setPage] = useState("formPage");

  return (<div className="app">
    <div style={{


display:'flex',
gap:'20px'
    }}>
      <button
      onClick={()=>setPage('counterPage')}
      className="btn btn-primary">Sayaç Sayfası</button>
  
      <button
      onClick={()=>setPage('formPage')}
      className="btn btn-warning">Form Sayfası</button>
  
    </div>
   { page === "counterPage" ? <Sayac /> : <Form/>}
  </div>);
};

export default App;
