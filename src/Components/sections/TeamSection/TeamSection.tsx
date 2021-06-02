import React from 'react';
import TeamCard from '../../partials/TeamCard/TeamCard';
import './styles.css';
import content from '../../../content/about';

export const TeamSection = () => {
    return (
        <div className='card-section-wrapper'>
            <div className='card-section-title'>Our Team</div>
            <div className='card-section'>
                {content[0].team
                ?
                content[0].team.map((card: any) => {
                    return <TeamCard title={card.title} main={card.main} name={card.name} image={card.image}/>
                })
                : null
                }
            </div>
        </div>
    )
}
