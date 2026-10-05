import { useState } from "react";
import Header from "./Header";
import DrinkCard from "./DrinkCard";
import drinks from "./drinks";
import "./App.css";

function App() {
  const [order, setOrder] = useState([]);

  const addToOrder = (drink) => {
    setOrder([...order, drink]);
  };

  const clearOrder = () => {
    setOrder([]);
  };

  const total = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <Header />

      <main>
        <h2>Menu</h2>
        <div className="menu-grid">
          {drinks.map((drink) => (
            <DrinkCard
              key={drink.id}
              name={drink.name}
              price={drink.price}
              description={drink.description}
              onAdd={() => addToOrder(drink)}
            />
          ))}
        </div>

        <section className="order-section">
          <h2>Your Order</h2>
          {order.length === 0 ? (
            <p>Your order is empty.</p>
          ) : (
            <div>
              <ul>
                {order.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Items:</strong> {order.length}
              </p>
              <p>
                <strong>Total:</strong> ${total.toFixed(2)}
              </p>

              {order.length > 0 && (
                <button onClick={clearOrder} className="clear-btn">
                  Clear order
                </button>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
