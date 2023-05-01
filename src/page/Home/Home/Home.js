import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import OurContribution from '../OurContribution/OurContribution';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <OurContribution />
            <Footer />
        </div>
    );
};

export default Home;