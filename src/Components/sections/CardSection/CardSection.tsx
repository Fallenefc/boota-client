import React from 'react';
import { PlanCard } from '../../partials/PlanCard/PlanCard';
import './styles.css';

interface Card {
    title: string,
    price: number,
    features: string[]
}

interface Props {
    cards: Card[]
}

export const CardSection = ({cards}: Props) => {
    return (
        <div className='card-section-wrapper'>
            <div className='card-section-title'>Plans and Prices</div>
            <div className='card-section'>
                {cards
                ?
                cards.map((card: Card) => {
                    return <PlanCard title={card.title} price={card.price} features={card.features}/>
                })
                : null
                }
            </div>
        </div>
    )
}
