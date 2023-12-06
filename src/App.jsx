import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';

export default function App() {
    return (
        <div className="max-w-[1640px]">
            <Navbar />
            <Search />
            <Features />
            <Footer />
        </div>
    );
}
