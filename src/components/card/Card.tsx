import { ReactElement } from "react";

import { IFruit } from "../../types/data";

import "./card.scss";
import { useNavigate } from "react-router";

interface ComponentProps {
  fruit: IFruit;
  onRemove: () => void;
  onLiked: () => void;
}

const Card = ({ fruit, onRemove, onLiked }: ComponentProps): ReactElement => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.closest(".fruits-card__delete-button")) {
      onRemove();
    } else if (target.closest(".fruits-card__like")) {
      onLiked();
    } else if (target.closest(".fruits-card__edit-button")) {
      navigate(`/products/${fruit.id}/edit`);
    }
    else {
      navigate(`/products/${fruit.id}`);
    }
  };

  return (
    <div className="fruits-card">
      <div className="fruits-card__wrapper" onClick={handleClick} tabIndex={0}>
        <div className="fruits-card__title">
          <h4>
            {fruit.name.length > 15 ? fruit.name.slice(0, 15) : fruit.name}
          </h4>
        </div>
        <div className="fruits-card__control">
          <span className="fruits-card__delete-button">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fruits-card__control-icon"
              tabIndex={0}
            >
              <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z" />
            </svg>
          </span>
          <span className="fruits-card__edit-button">
            <svg
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fruits-card__control-icon"
              tabIndex={0}
            >
              <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
            </svg>
          </span>
        </div>
        <div className="fruits-card__nutritions">
          <p>Calories: {fruit.nutritions.calories}</p>
          <p>Protein: {fruit.nutritions.protein}</p>
          <p>Sugar: {fruit.nutritions.sugar}</p>
        </div>
        <div className="fruits-card__descirption">
          <p>
            Family:{" "}
            {fruit.family.length > 15
              ? fruit.family.slice(0, 25)
              : fruit.family}
          </p>
          <p>
            Genus:{" "}
            {fruit.genus.length > 15 ? fruit.genus.slice(0, 25) : fruit.genus}
          </p>
        </div>
        <span className="fruits-card__like">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className={`fruits-card__like-icon ${fruit.isLiked ? "liked" : ""}`}
            tabIndex={0}
          >
            <path d="m26.8 13.07h-3.52c-1 0-.91-1-.73-3.41.27-3.58.34-5.2-1.3-6.32a8.74 8.74 0 0 0 -2.36-1.24 2.61 2.61 0 0 0 -3.17 1.68l-3.29 9.29h-7.23a3.25 3.25 0 0 0 -3.2 3.3v10.33a3.25 3.25 0 0 0 3.2 3.3h20.08a3.21 3.21 0 0 0 3.16-2.8l1.56-10.33a3.26 3.26 0 0 0 -3.2-3.8zm-22.8 13.63v-10.33a1.26 1.26 0 0 1 1.2-1.3h3.39v12.93h-3.39a1.25 1.25 0 0 1 -1.2-1.3zm24-10.13-1.54 10.34a1.22 1.22 0 0 1 -1.18 1.09h-14.69v-12.93h2.55a1 1 0 0 0 .94-.66l3.52-10a.63.63 0 0 1 .74-.41 6.83 6.83 0 0 1 1.78 1c.7.47.55 1.32.55 2.2 0 2.85-.77 5.63.58 7.09.93 1 1.91.79 5.55.79a1.27 1.27 0 0 1 1.2 1.49z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Card;
