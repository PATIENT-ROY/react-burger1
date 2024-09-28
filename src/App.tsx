import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import BurgerConstructor from './components/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients';
import { data } from './utils/data';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);

  };

  return (
    <div>
      <header>
        <AppHeader isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      </header>
      <main>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor 
          ingredients={data}
          selectedIngredients={[]} // Add this prop
          onAddIngredient={() => {}} // Add this prop
          onRemoveIngredient={() => {}} // Add this prop
        />
      </main>
    </div>
  );
}

export default App;

