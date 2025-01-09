import { ReactElement } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { removeFruit, selectedFilteredFruits, toggleLiked } from '../../store/fruitsSlice';
import { IFruit } from '../../types/data';

import Card from '../card/Card';

import "./cardList.scss"


const CardList = (): ReactElement => {

    const dispatch = useAppDispatch();

    const fruits = useAppSelector(selectedFilteredFruits)

    const onRemove = (id: number | string): void => {
        dispatch(removeFruit(id))
    }

    const onLiked = (id: number | string): void => {
        dispatch(toggleLiked(id))
    }

    const renderCards = (arr: IFruit[]): ReactElement[] => {
        const res = arr.map(item => {
            return (
                <Card 
                    key={item.id} 
                    fruit={item} 
                    onRemove={() => onRemove(item.id)} 
                    onLiked={() => onLiked(item.id)} />
            )
        })

        return res;
    }

    const fruitCards = renderCards(fruits);

    return (
        <div className='fruits-cards'>
            {fruitCards}
        </div>
    )
}

export default CardList;