import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import {Routes , Route} from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './component/Home';


function App() {
  return (
    <div className="cont">
      <UserAuthContextProvider>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route path='/Home' element = {<Home/>}/>
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
