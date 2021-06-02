import React from 'react';
import './styles.css';

interface Props {
    title: string,
    price: number,
    features: string[]
}

export const PlanCard = ({title, price, features}: Props) => {
    return (
        <div className="plan-card">
            <div className="plan-title">
                {title}
            </div>
            <div className="plan-price">
                ${price}/month
            </div>
            <div className="plan-features">
                <ul className="plan-features-list">
                    {features && features.map((feature: string) => {
                        return <div className="list-point"><i className="fa fa-check"></i><li>{feature}</li></div>
                    })}
                </ul>
            </div>
        </div>
    )
}
