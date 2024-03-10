import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductListing from './pages/ProductListing';
import BreadCrumbs from './components/BreadCrumbs';

function App() {
  return (
    <BrowserRouter>
   <BreadCrumbs />
    <div className="App">
      <h1>Bread Crumbs Feature</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id"  element={<ProductDetails />}  />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
