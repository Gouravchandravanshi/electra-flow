import './App.css';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import PopularChargerSec from './components/PopularChargerSec';
import Subscribe from './components/Subscribe';
import Value from './components/Value';

function App() {
  return (
    <div className=''>
    <Header></Header>
    <Body></Body>
    <PopularChargerSec></PopularChargerSec>
    <Value></Value>
    <Contact></Contact>
    <Subscribe></Subscribe>
    <Footer></Footer>
    </div>
  );
}

export default App;
