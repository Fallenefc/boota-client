import React from 'react';
import { Footer } from '../../Components/Footer/Footer';
import { LandingHeader } from '../../Components/LandingHeader/LandingHeader';
import { CardSection } from '../../Components/sections/CardSection/CardSection';
import cards from '../../content/plansCards';
import './styles.css';

export const Pricing = () => {
    return (
        <div className="pricing-page">
            <LandingHeader />
            <CardSection cards={cards}/>
            <Footer />
        </div>
    )
}
