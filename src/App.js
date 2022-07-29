import ActiveSection from './components/ActiveSection.jsx';
import FeaturedSection from './components/FeaturedSection.jsx';
import Footer from './components/Footer.jsx';
import HeroSection from './components/HeroSection.jsx';
import QueriesSection from './components/QueriesSection.jsx';
import StorageSection from './components/StorageSection.jsx';
import TopNavigation from './components/TopNavigation.jsx';

function App() {
	return (
		<div className='relative text-paragraph'>
			<TopNavigation />
			<HeroSection />
			<FeaturedSection />
			<ActiveSection />
			<StorageSection />
			<QueriesSection />
			<Footer />
		</div>
	);
}

export default App;
