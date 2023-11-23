import React from 'react';
import Head from '../../views/Head/Head';
import Foot from '../../views/Foot/Foot';
import SimpleSlider from '../../comps/Slider/SimpleSlider';

function Main() {
    return <React.Fragment>
        <Head></Head>
        <Foot></Foot>
        <SimpleSlider/>
    </React.Fragment>
}

export default Main;
