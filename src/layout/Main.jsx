import React, { useEffect } from 'react';
import Header from '../sharedPage/Header/Header';
import Footer from '../sharedPage/Footer/Footer';
import Banner from '../Pages/Home/Banner/Banner';
import ChefSection from '../Pages/Home/ChefSection/ChefSection';
import ExtraSection1 from '../Pages/Home/ExtraSection1/ExtraSection1';
import ExtraSection2 from '../Pages/Home/ExtraSection2/ExtraSection2';

const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
            <Footer></Footer>
        </div>
    );
};

export default Main;