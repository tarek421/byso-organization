import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import OurContribution from '../OurContribution/OurContribution';
import Team from '../Team/Team';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <WhoWeAre />
            <WhatWeDo />
            <Team />
            <OurContribution />
            <Footer />
        </div>
    );
};

export default Home;