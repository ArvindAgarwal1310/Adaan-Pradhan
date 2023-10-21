import {Routes, Route} from 'react-router-dom'
import './App.css';
import { Home } from './components/home';
import { Login } from './components/login';
import { Navbar } from './components/Navbar';
import { NoMatch } from './components/NoMatch';
import { Discover } from "./components/Discover"
function App() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
        <Route path='/Discover' element={<Discover />}></Route>
      </Routes>
    </>
  );
}
export default App;
