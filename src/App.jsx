import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Кросівки Nike Air', price: 120, quantity: 1 },
    { id: 2, name: 'Футболка Oversize', price: 45, quantity: 1 },
    { id: 3, name: 'Рюкзак Urban', price: 80, quantity: 1 },
  ]);

  const updateQty = (id, change) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, quantity: Math.max(1, p.quantity + change) } : p
    ));
  };

  const remove = (id) => setProducts(products.filter(p => p.id !== id));

  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className="cart-card">
      <h2>Кошик</h2>
      {products.length > 0 ? (
        <>
          {products.map(p => (
            <div key={p.id} className="item">
              <span>{p.name} (${p.price})</span>
              <div className="controls">
                <button onClick={() => updateQty(p.id, -1)}>-</button>
                <span className="qty">{p.quantity}</span>
                <button onClick={() => updateQty(p.id, 1)}>+</button>
                <button className="del" onClick={() => remove(p.id)}>🗑</button>
              </div>
            </div>
          ))}
          <hr />
          <h3>Разом: ${total}</h3>
        </>
      ) : (
        <div className="empty">
          <p>Кошик порожній :(</p>
          <button onClick={() => window.location.reload()}>Скинути</button>
        </div>
      )}
    </div>
  )
}

export default App
