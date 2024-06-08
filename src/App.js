import './App.css';
import Body from './components/Body';
import Contact from './components/Contact';
import DcChargerSection from './components/DcChargerSection';
import Footer from './components/Footer';
import Header from './components/Header';
import PopularChargerSec from './components/PopularChargerSec';
import Ractifier from './components/Ractifier';
import Subscribe from './components/Subscribe';
import Value from './components/Value';
import DcChargerData from './components/assets/dcchargerdata';
import product from './components/assets/product';
import ractifierData from './components/assets/ractifier';

function App() {
  return (
    <div className=''>
    <Header></Header>
    <Body></Body>
    <PopularChargerSec details={product}></PopularChargerSec>
    <DcChargerSection details={DcChargerData}></DcChargerSection>
    <Ractifier details={ractifierData}></Ractifier>
    <Value></Value>
    <Contact></Contact>
    <Subscribe></Subscribe>
    <Footer></Footer>
    </div>
  );
}

export default App;
