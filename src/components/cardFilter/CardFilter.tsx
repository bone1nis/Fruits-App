import { ReactElement } from "react";

import { useAppDispatch } from "../../hooks/hooks";
import { setFilter } from "../../store/fruitsSlice";

import "./cardFilter.scss";

const CardFilter = (): ReactElement => {
  const dispatch = useAppDispatch();

  const onChangeFilter = (filter: string): void => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="card-filter">
      <button
        className="btn"
        onClick={() => onChangeFilter("all")}
        tabIndex={0}
      >
        All
      </button>
      <button
        className="btn"
        onClick={() => onChangeFilter("favorites")}
        tabIndex={0}
      >
        Favorites
      </button>
      <button
        className="btn"
        onClick={() => onChangeFilter("name")}
        tabIndex={0}
      >
        Name
      </button>
      <button
        className="btn"
        onClick={() => onChangeFilter("calories")}
        tabIndex={0}
      >
        Calories
      </button>
    </div>
  );
};

export default CardFilter;
