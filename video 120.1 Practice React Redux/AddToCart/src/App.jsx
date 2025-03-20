import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import Cart from './components/Cart'

const App = () => {
  const sampleProducts = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
  ];

  return (
    <div className="App">
      <h1>My Store</h1>
      <div className="products" style={{ display: 'flex', gap: '20px' }}>
        {sampleProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default App
