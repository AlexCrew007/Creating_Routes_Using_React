
import { NavLink, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Source from './components/Source';
import NotFound from './components/NotFound';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
    <nav>
    <ol>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/source'>Source</NavLink>
      </li>
    </ol>
      
    </nav>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/source' element={<Source></Source>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
