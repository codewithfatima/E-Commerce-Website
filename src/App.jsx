import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as  Router , Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Collection from './components/Collection';
import Login from './components/Login';
import Card from './components/Card';
import Product from './components/Product';
import PlaceOrder from './components/PlaceOrder';
import BestSellers from './components/BestSellers';
import Home from './components/Home';
import Orders from './components/Orders';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import './App.css'

function App() {

  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'> 
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about'  element={<About />} />
        <Route path='/contact'  element={<Contact />} />
        <Route path='/product/:productId'  element={<Product />} />
        <Route path='/card'  element={<Card />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/place-order'  element={<PlaceOrder />} />
        {/* <Route path='/pratice'  element={<Pratice />} /> */}
        <Route path='/orders'  element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
