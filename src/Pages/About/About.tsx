import React from 'react';
import { Footer } from '../../Components/Footer/Footer';
import { LandingHeader } from '../../Components/LandingHeader/LandingHeader';
import './styles.css';
import content from '../../content/about';
import { TextSection } from '../../Components/sections/TextSection/TextSection';
import { TeamSection } from '../../Components/sections/TeamSection/TeamSection';

export const About = () => {
    return (
        <div className="about-page">
            <LandingHeader />
            <TextSection text={content[0]['text-section-1'].text} title={content[0]['text-section-1'].title} />
            <TeamSection />
            <Footer />
        </div>
    )
}
