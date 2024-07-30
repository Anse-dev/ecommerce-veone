import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import { ToastContainer } from 'react-toastify';

const App = () => (
    <CartProvider>
        <Router>
            <div className="flex flex-col min-h-screen bg-background text-text">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
            <ToastContainer />
        </Router>
    </CartProvider>
);

export default App;
