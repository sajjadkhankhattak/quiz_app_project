import Navbar from './Navbar';
import Hero from './Hero';
import QuizGrid from './QuizGrid';
import TopScorers from './TopScorers';
import Footer from './Footer';
function LandingPage() {
    return (<>
        <Navbar />
        <Hero />
        <QuizGrid />
        <TopScorers />
        <Footer />
    </>);
}

export default LandingPage;