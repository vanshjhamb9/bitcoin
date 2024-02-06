
import './App.css';
import image1 from "./images/Ellipse 174.png";

import BitcoinList from './component/BitcoinList';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CardSlider from './component/CardSlider';



function App() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className=" bg-richblack-5 justify-center mx-auto min-h-screen flex flex-col">
    <div className='flex bg-white border-b-2 mt-6rem justify-around xs:space-x-[200px] lg:space-x-[740px]  object-fit p-[20px]'> 
    <div className='flex flex-wrap align-baseline gap-2'>
    <img className='w-[22.95px] h-[27px]' src={image1} />
    <div className='font-inter w-[140px] h-[35px] leading-[35px] font-bold align'>Crypto tracker</div>
    </div>
    <div className='flex flex-row gap-4'>
       <FaSearch />
       <GiHamburgerMenu />
    </div>
</div>
<div className='w-[11/12] py-8 px-12  '>

  <CardSlider />      
</div>
<div className='font-inter font-semibold py-2 text-[24px] leading-35px'>Top 100 Cryptocurrencies by Market Cap</div>
<div className='py-4'>
      <BitcoinList />
      </div>
    </div>
  );
}

export default App;
