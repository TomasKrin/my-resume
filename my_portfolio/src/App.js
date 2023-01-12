import {Routes, Route} from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import MainPage from './Pages/MainPage/MainPage';
import ContactMe from './Pages/ContactMe/ContactMe';
import MyProjects from './Pages/MyProjects/MyProjects';

function App() {
  return (
<Routes>
  <Route path='/' element={<MainPage/>}/>
  <Route path='/about' element={<AboutMe/>}/>
  <Route path='/projects' element={<MyProjects/>}/>
  <Route path='/contact' element={<ContactMe/>}/>
</Routes>
  );
}

export default App;
