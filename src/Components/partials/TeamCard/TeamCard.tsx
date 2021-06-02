import React, { ReactElement } from 'react';
import './styles.css';

interface Props {
    title: string,
    main: string,
    name: string,
    image: string,
}

function TeamCard({title, main, name, image}: Props): ReactElement {
    return (
        <div className='team-card'>
            <div className='team-card-image'>
                <div className='team-card-image-background' style={{
                    backgroundImage: `url('http://localhost:3000/${image}')`
                }}>

                </div>
                {/* <img src={image}></img> */}
            </div>
            <div className='team-card-info'>
                <div className='team-card-title'>
                    {name}
                </div>
                <div className='team-card-main'>
                    {title}
                </div>
                <div className='team-card-footer'>
                    {main}
                </div>
            </div>
        </div>
    )
}

export default TeamCard;