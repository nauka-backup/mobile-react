import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './HeroContainer.css';

function HeroContainer({
    lightBg,
    heading,
    lightText,
    lightTextDesc,
    title,
    description,
    linkTo,
    buttonText,
    img,
    alt,
    imgStart,
}) {
    return (
        <>
            <div
                className={
                    lightBg
                        ? 'hero__container-section'
                        : 'hero__container-section darkBg'
                }
            >
                <div className="wrapper">
                    <div
                        className="row hero__container-row"
                        style={{
                            display: 'flex',
                            flexDirection:
                                imgStart === 'start' ? 'row-reverse' : 'row',
                        }}
                    >
                        <div className="column">
                            <div className="hero__container-text-container">
                                <div className="heading">{heading}</div>
                                <h1
                                    className={
                                        lightText ? 'title' : 'title dark'
                                    }
                                >
                                    {title}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'hero__container-subtitle'
                                            : 'hero__container-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                <Link to={linkTo}>
                                    <Button
                                        buttonSize="btn--wide"
                                        buttonColor="blue"
                                    >
                                        {buttonText}
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="column">
                            <div className="hero__container-img-wrapper">
                                <img
                                    src={img}
                                    alt={alt}
                                    className="hero__container-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroContainer;
