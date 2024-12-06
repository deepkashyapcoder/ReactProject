import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BannerDesign } from './BannerDesign';
import { Offer } from './Offer';
import ProductList from './Product';

function App() {
  return (
    <>
      <div className="container-fluid bg-img">
        <Navbar></Navbar>
        <div className='banner-outer'>
          <BannerDesign></BannerDesign>
        </div>
      </div>
      <Offer></Offer>
     <ProductList></ProductList>
    </>
  )
}

export default App;
