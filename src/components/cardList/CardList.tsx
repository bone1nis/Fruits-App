import { ReactElement, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { removeFruit, selectAll, toggleLiked } from "../../store/fruitsSlice";
import store from "../../store";
import { IFruit } from "../../types/data";

import Card from "../card/Card";

import "./cardList.scss";

const CardList = (): ReactElement => {
  const dispatch = useAppDispatch();
  const fruits = useAppSelector((state) => state.fruits);

  const [visibleFruits, setVisibleFruits] = useState(6);

  const filteredFruits = useMemo(() => {
    const allFruits = selectAll(store.getState());

    if (fruits.filterActive === "all") {
      return allFruits;
    } else if (fruits.filterActive === "favorites") {
      return allFruits.filter((fruit) => fruit.isLiked);
    } else if (fruits.filterActive === "name") {
      return [...allFruits].sort((a, b) => a.name.localeCompare(b.name));
    } else if (fruits.filterActive === "calories") {
      return [...allFruits].sort(
        (a, b) => a.nutritions.calories - b.nutritions.calories
      );
    }

    return allFruits;
  }, [fruits.filterActive, fruits]);

  const onLoadMore = (amount?: number): void => {
    if (amount) {
      setVisibleFruits(visibleFruits + amount);
    } else {
      setVisibleFruits(filteredFruits.length);
    }
  };

  const onRemove = (id: number | string): void => {
    dispatch(removeFruit(id));
  };

  const onLiked = (id: number | string): void => {
    dispatch(toggleLiked(id));
  };

  const renderCards = (arr: IFruit[], amount: number): ReactElement[] => {
    const limitedFruits = arr.slice(0, amount);

    const res = limitedFruits.map((item) => {
      return (
        <Card
          key={item.id}
          fruit={item}
          onRemove={() => onRemove(item.id)}
          onLiked={() => onLiked(item.id)}
        />
      );
    });

    return res;
  };

  const fruitCards = renderCards(filteredFruits, visibleFruits);

  return (
    <>
      <div className="fruits-cards">{fruitCards}</div>
      <div className="fruits-cards__btns">
        <button
          className="btn btn__average fruits-cards__btn"
          onClick={() => onLoadMore(3)}
        >
          Load more
        </button>
        <button
          className="btn btn__average fruits-cards__btn"
          onClick={() => onLoadMore()}
        >
          Load all
        </button>
      </div>
    </>
  );
};

export default CardList;
