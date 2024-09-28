import React from 'react';
import styleS from './appheader.module.css';

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredients from './BurgerIngredients';
import BurgerConstructor from './BurgerConstructor';

interface AppHeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <>
      <nav className={styleS.navbar}>
        <div className={styleS.content}>
          <div className={styleS.navigation}>
            <BurgerIcon type="primary" />
            <span>Constructor</span>
            <ListIcon type="primary" />
            <span>Лента заказов</span>
          </div>
          <Logo className={styleS.logo} />
          <div className={styleS.profile}>
            {isAuthenticated ? (
              <div className={styleS.personalCabinet} onClick={onLogout}>
                <ProfileIcon type="primary" />
                <span>Личный кабинет</span>
              </div>
            ) : (
              <button className={styleS.linkButton}>Личный кабинет</button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppHeader;