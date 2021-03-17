import React from 'react';
import HeroContainer from '../../HeroContainer/HeroContainer';
import { homeObject1, homeObject2, homeObject3 } from './Data';

function Home() {
    return (
        <>
            <HeroContainer {...homeObject1} />
            <HeroContainer {...homeObject2} />
            <HeroContainer {...homeObject3} />
        </>
    );
}

export default Home;
