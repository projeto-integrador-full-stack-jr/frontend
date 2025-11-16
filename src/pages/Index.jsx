import Header from '../components/Header';
import FastMarquee from '../components/FastMarquee';

import Footer from '../components/Footer';

import About from '../sections/About';
import HowToUseMentoria from '../sections/HowToUseMentoria';
import Features from '../sections/Features';
import Newslatter from '../sections/Newslatter.jsx';
import Faq from '../sections/Faq';
import HeroSection from '../sections/HeroSection';

const LandingPage = () => {
    return (
        <div className="min-h-screen w-full">
            <Header />
            <main>
                <HeroSection />
                <About />
                <Features />
                <Newslatter />
                <HowToUseMentoria />
                <FastMarquee />
                <Faq />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
