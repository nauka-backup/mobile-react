import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { AiFillCar } from 'react-icons/ai';
import { BiHomeSmile } from 'react-icons/bi';
import { MdSmartphone } from 'react-icons/md';
import './ServicesList.css';

const ServicesList = ({ handleLogout }) => {
    return (
        <section className="services-hero">
            <section className="service-icons">
                <div>
                    <AiOutlineWifi />
                    <a href="/" className="user-text">
                        Internet
                    </a>
                </div>
                <div>
                    <AiFillCar />
                    <a href="/" className="user-text">
                        Smartcar
                    </a>
                </div>
                <div>
                    <BiHomeSmile />
                    <a href="/" className="user-text">
                        Smarthome
                    </a>
                </div>
                <div>
                    <MdSmartphone />
                    <a href="/" className="user-text">
                        Smartphone
                    </a>
                </div>
            </section>
        </section>
    );
};

export default ServicesList;
