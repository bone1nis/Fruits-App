import { ReactElement } from "react";

import { IFruit } from "../../types/data";

import "./detailedCard.scss";

interface ComponentProps {
  fruit: IFruit;
  onClose: () => void;
}

const DetailedCard = ({ fruit, onClose }: ComponentProps): ReactElement => {
  return (
    <div className="detailed-card">
      <h4 className="detailed-card__title">{fruit.name}</h4>
      <div className="detailed-card__info">
        <div className="detailed-card__nutritions">
          <p>Calories: {fruit.nutritions.calories}</p>
          <p>Protein: {fruit.nutritions.protein}</p>
          <p>Sugar: {fruit.nutritions.sugar}</p>
          <p>Fat: {fruit.nutritions.calories}</p>
          <p>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
        </div>
        <div className="detailed-card__description">
          <p>Family: {fruit.family}</p>
          <p>Genus: {fruit.genus}</p>
          <p>Order: {fruit.order}</p>
        </div>
      </div>
      <button className="btn btn__average detailed-card__btn" onClick={onClose}>
        Edit
      </button>
    </div>
  );
};

export default DetailedCard;
