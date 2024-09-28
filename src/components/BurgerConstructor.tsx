import React from 'react';
import styles from './BurgerConstructor.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredient } from "../utils/types";

type TBurgerConstructorProps = {
  ingredients: ReadonlyArray<TIngredient>;
  selectedIngredients: ReadonlyArray<string>;
  onAddIngredient: (ingredient: TIngredient) => void;
  onRemoveIngredient: (ingredient: TIngredient) => void;
};

const BurgerConstructor: React.FC<TBurgerConstructorProps> = ({
  ingredients,
  selectedIngredients,
  onAddIngredient,
  onRemoveIngredient,
}) => {
  const totalPrice = selectedIngredients.reduce((acc, id) => {
    const ingredient = ingredients.find((ingredient) => ingredient._id === id);
    if (ingredient) {
      return acc + ingredient.price;
    }
    return acc;
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.scrollbar} />
      <div className={styles.burgerComponents}>
        {selectedIngredients.map((id) => {
          const ingredient = ingredients.find((ingredient) => ingredient._id === id);
          if (ingredient) {
            return (
              <div key={ingredient._id} className={styles.burgerComponent}>
                <p>{ingredient.name}</p>
                <button type="button" onClick={() => onRemoveIngredient(ingredient)}>
                  Удалить
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className={styles.info}>
        <div className={styles.price}>
          <span className={styles.priceText}>{totalPrice}</span>
          <CurrencyIcon className={styles.icone} type="primary" />
        </div>
        <button className={styles.button} type="button" disabled={selectedIngredients.length === 0}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default BurgerConstructor;