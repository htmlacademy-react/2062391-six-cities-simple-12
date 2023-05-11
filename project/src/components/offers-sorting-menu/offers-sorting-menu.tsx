import { useEffect ,useState } from 'react';
import { SORT_MENU_ITEMS } from '../../constants/constants';
// import { Offer } from '../../types/types';
import { useAppSelector } from '../../hooks';


type OffersSortingMenuProps = {
  setActiveSortItem: React.Dispatch<React.SetStateAction<SORT_MENU_ITEMS>>;
}


function OffersSortingMenu ({setActiveSortItem}: OffersSortingMenuProps): JSX.Element {

  const menuItems = Object.values(SORT_MENU_ITEMS);

  const [activeItem, setActiveItem] = useState(SORT_MENU_ITEMS.Default);
  const [closeMenu, setCloseMenu] = useState(true);
  const currentCity = useAppSelector((state) => state.city);

  const changeActiveItemHandler = (newActiveItem: SORT_MENU_ITEMS) => {
    setActiveItem(newActiveItem);
    setCloseMenu(!closeMenu);
  };

  useEffect(() => {
    setCloseMenu(true);
    setActiveItem(SORT_MENU_ITEMS.Default);
  }, [currentCity]);

  useEffect(() => {
    setActiveSortItem(activeItem);
  }, [activeItem, setActiveSortItem]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span
        className="places__sorting-type" tabIndex={0}
        onClick={() => setCloseMenu(!closeMenu)}
      >
        {activeItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${closeMenu ? '' : 'places__options--opened'}`}
      >
        {
          menuItems.map((item) => (
            <li
              key={`places__option_${item}`}
              className={`places__option ${item === activeItem ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => changeActiveItemHandler(item)}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default OffersSortingMenu;
