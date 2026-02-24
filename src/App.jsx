import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./_pages/Home/Home";
import Register from "./_pages/Register/Register";
import Login from "./_pages/Login/Login";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        
      </Routes>
    
    </BrowserRouter>
  );

}

export default App;
