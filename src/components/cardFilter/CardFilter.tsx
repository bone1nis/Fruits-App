import { ReactElement } from "react";

import { useAppDispatch } from "../../hooks/hooks";
import { setFilter } from "../../store/fruitsSlice";

import "./cardFilter.scss"


const CardFilter = (): ReactElement => {

    const dispatch = useAppDispatch();

    const onChangeFilter = (filter: string): void => {
            dispatch(setFilter(filter))
    }

    return (
        <div className="card-filter">
            <button 
                className="card-filter__btn"
                onClick={() => onChangeFilter("all")}
                tabIndex={0}>All</button>
            <button 
                className="card-filter__btn"
                onClick={() => onChangeFilter("favorites")}
                tabIndex={0}>Favorites</button>
        </div>
    );
}

export default CardFilter;