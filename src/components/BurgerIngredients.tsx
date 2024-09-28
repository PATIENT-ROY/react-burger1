import React from 'react';
import { TIngredient } from '../utils/types';
import styles from './BurgerIngredients.module.css';

type TBurgerIngredientsProps = {
  ingredients: ReadonlyArray<TIngredient>;
};

const BurgerIngredients: React.FC<TBurgerIngredientsProps> = ({ ingredients }) => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollbar} />
      <div className={styles.title}>Соберите бургер</div>
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.active}`}>Булки</div>
        <div className={styles.tab}>Соусы</div>
        <div className={styles.tab}>Начинки</div>
      </div>
      <div className={styles.ingredients}>
        {ingredients.map((ingredient) => (
          <div className={styles.ingredientContainer} key={ingredient._id}>
            <div className={styles.ingredientDetails}>
              <p>{ingredient.name}</p>
              <div className={styles.nutritionalInfo}>
                <p>Proteins: {ingredient.proteins}g</p>
                <p>Fat: {ingredient.fat}g</p>
                <p>Carbohydrates: {ingredient.carbohydrates}g</p>
                <p>Calories: {ingredient.calories}kcal</p>
                <p>Price: {ingredient.price} rub</p>
              </div>
            </div>
            <img
              src={ingredient.image}
              alt={ingredient.name}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/150';
              }}
              onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const img = e.currentTarget;
                if (img.naturalWidth === 0) {
                  img.src = 'https://via.placeholder.com/150';
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerIngredients;
