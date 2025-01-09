import { ReactElement } from "react";
import { Link, useParams } from "react-router";

import { useAppSelector } from "../../hooks/hooks";
import { selectById } from "../../store/fruitsSlice";
import { RootState } from "../../store";

import "./singleFruitPage.scss"

const SingleFruitPage = (): ReactElement => {
    const { fruitId } = useParams() as { fruitId: string};

    const fruit = useAppSelector((state: RootState) => selectById(state, fruitId));

    const content = (fruit ? (
        <>
        <h4 className="single-fruit__title">{fruit.name}</h4>
        <div className="single-fruit__info">
            <div className="single-fruit__nutritions">
                <p>Calories: {fruit.nutritions.calories}</p>
                <p>Protein: {fruit.nutritions.protein}</p>
                <p>Sugar: {fruit.nutritions.sugar}</p>
                <p>Fat: {fruit.nutritions.calories}</p>
                <p>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
            </div>
            <div className="single-fruit__description">
                <p>Family: {fruit.family}</p>
                <p>Genus: {fruit.genus}</p>
                <p>Order: {fruit.order}</p>
            </div>
        </div>
        </>
    ): <h4 className="single-fruit__title">Undefined fruit</h4>)

    return (
        <div className="single-fruit">
            {content}
            <Link to="/products" className="single-fruit__btn">Main Page</Link>
        </div>
    );
}

export default SingleFruitPage;