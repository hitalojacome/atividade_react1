import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import GrandCanyon from './Components/GrandCanyon';
import Escocia from './Components/Escocia';
import Muralha from './Components/Muralha';
import Aruba from './Components/Aruba';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Grandcanyon' element={<GrandCanyon/>} />
          <Route path='/Escocia' element={<Escocia/>} />
          <Route path='/Muralha' element={<Muralha/>} />
          <Route path='/Aruba' element={<Aruba/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;