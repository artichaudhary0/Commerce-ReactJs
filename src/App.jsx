/* eslint-disable react/no-unescaped-entities */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/products" element={<Products />}>
              <Route path=":productId" element={<ProductDetails />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={
              <div className="page">
                <h1>404 - Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            } />

            </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;