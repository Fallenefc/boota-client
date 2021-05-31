import React from 'react';
import './styles.css';

interface Footer {
    button?: string,
    text?: string,
}

interface Props {
    title?: string,
    text: string,
    image?: string,
    backgroundColor?: string,
    textColor?: string,
    footer?: Footer,
}

export const TextSection = (props: Props) => {
    return (
        <div className="text-section-wrapper">
            { props.image ?
            <div className="image-section">
                <img src={props.image}>
                </img>
            </div>
            : null
            }
            <div className="text-section">
                <div className="text-section-title">
                    { props. title }
                </div>
                <div className="text-section-text">
                    { props.text }
                </div>
                { props.footer ?
                    <div className="text-section-footer">
                        Footer
                    </div>
                : null
                }
            </div>
        </div>
    )
}
