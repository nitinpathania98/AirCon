import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Features from './Pages/Features';
import FreeQuote from './Pages/FreeQuote';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurServices from './Pages/OurServices';
import OurTeam from './Pages/OurTeam';
import Page404 from './Pages/Page404';
import Pages from './Pages/Pages';
import Testimonial from './Pages/Testimonial';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Context/AuthContext';
import Crud from './Pages/Crud';
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/AboutUs' element={<AboutUs />}></Route>
            <Route path='/ContactUs' element={<ContactUs />}></Route>
            <Route path='/Features' element={<Features />}></Route>
            <Route path='/FreeQuote' element={<FreeQuote />}></Route>
            <Route path='/OurServices' element={<OurServices />}></Route>
            <Route path='/OurTeam' element={<OurTeam />}></Route>
            <Route path='/Page404' element={<Page404 />}></Route>
            <Route path='/Pages' element={<Pages />}></Route>
            <Route path='/Testimonial' element={<Testimonial />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='/Crud' element={<Crud />}></Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
