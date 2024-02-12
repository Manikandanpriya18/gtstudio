import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Component/Dashboard";
import Developer from "./Component/Developer";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Developer" element={<Developer/>}></Route>
        
        
      </Routes>
      </BrowserRouter>
      
      {/* <Dashboard />
      <Developer /> */}
    </>
  );
}

export default App;
