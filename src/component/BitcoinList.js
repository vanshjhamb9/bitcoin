import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { FaRegStar } from "react-icons/fa";
import { TiArrowSortedDown ,TiArrowSortedUp  } from "react-icons/ti";
import ProgressBar from '@ramonak/react-progress-bar';
import { CiMenuKebab } from "react-icons/ci";
import BitcoinModal from './BitcoinModal';
import { IoMdTrendingDown } from "react-icons/io";

const BitcoinList = () => {
  const [bitcoinData, setBitcoinData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalData, setModalData] = useState(null);

  const fetchBitcoinData = async (page) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/bitcoinData?page=${page}`);
      setBitcoinData(response.data);
      console.log('Response is ', response.data);
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
    }
  };

  useEffect(() => {
    fetchBitcoinData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowClick = (dataItem) => {
    setModalData({
      image: dataItem.image,
      heading: dataItem.name,
      current_price: dataItem.current_price,
      market_place: dataItem.market_cap,
      total_volume: dataItem.total_volume,
      circulating_supply: dataItem.circulating_supply,
      btn2Handler: () => setModalData(null),
    });
  };

  return (
    <>
      <div className="table-container scroll-smooth">
      <div className='flex flex-row gap-3 py-4 px-4 xs:hidden sm:hidden lg:flex'>
          <div className='flex py-2  px-2 font-inter font-semibold rounded-xl text-center items-center bg-richblack-50 gap-1 w-[114px]'>{<FaRegStar/>}<div>Favourite</div></div>
          <div className='py-2 px-2 font-inter font-semibold rounded-xl text-[#0000CD] text-center items-center bg-richblack-50 '>CryptoCurrencies</div>
          <div className='py-2 px-2 font-inter font-semibold rounded-xl text-center items-center bg-richblack-50 '>DEFI</div>
          <div className='py-2 px-2 font-inter font-semibold rounded-xl text-center items-center bg-richblack-50 '>NFTs & Colectibles</div>
        </div>
        <table className="min-w-full border-t border-gray-200">
          <thead className="bg-gray-200">
            <tr className="py-4">
            <th className="py-2 px-4 border-b"></th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">#</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b "><div className='flex ml-6 items-center gap-1  justify-center'>24H  <IoMdTrendingDown className='text-[#0000CD]'/> </div></th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">7D</th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">Market Cap</th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">Volume</th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">Circulating Supply</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {bitcoinData.map((dataItem, index) => (
              <tr className="font-inter font-semibold sm:cursor-pointer xs:cursor-pointer" key={dataItem.id} onClick={() => handleRowClick(dataItem)}>
              <td className='py-2 px-4 h-[80px] border-richblack-200 border-b items-center justify-evenly text-richblack-200'>{<FaRegStar/>}</td>
                <td className="py-2 px-4 h-[80px] border-richblack-200 border-b items-center justify-evenly flex flex-row gap-2 hidden sm:table-cell text-richblack-200">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b border-richblack-200 w-[280px] justify-center items-center text-center">
                  <div className="flex flex-wrap">
                    <img className="w-[24px] h-[24px] mr-2" src={dataItem.image} alt={dataItem.name} />
                    {dataItem.name} <span className="ml-2 uppercase text-richblack-200"> {dataItem.symbol} </span>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-richblack-200 text-center">${dataItem.current_price}</td>
                <td className="py-2 px-4 border-b border-richblack-200 text-center text-[#FF0000]">
                  <div className="flex gap-1 items-center">{<TiArrowSortedDown />}{'0.65%'}</div>
                </td>
                <td className="py-2 px-4 border-b border-richblack-200 text-center hidden sm:table-cell text-[#008000]">
                  <div className="flex gap-1 items-center">{<TiArrowSortedUp />}{'0.65%'}</div>
                </td>
                <td className="py-2 px-4 border-b border-richblack-200 text-center hidden sm:table-cell">${dataItem.market_cap}</td>
                <td className="py-2 px-4 border-b border-richblack-200 text-center hidden sm:table-cell">
                  <div className="flex flex-col text-right">${dataItem.total_volume}<div className="text-sm text-richblack-200">{'932,071 BTC'}</div></div>
                </td>
                <td className="py-2 px-4 border-b border-richblack-200 text-right hidden sm:table-cell">{dataItem.circulating_supply}
                  <div className="flex w-full flex-col gap-4">
                  <ProgressBar completed={60} height="8px"
          variant="success" isLabelVisible={false}  /></div>
                </td>
                <td className="py-2 px-4 border-b border-richblack-200 text-center">
                  <button className="px-8 py-2 text-sm font-medium text-richblack-300 hidden sm:block">
                    <CiMenuKebab />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center sm:justify-end py-4 mr-10">
          <Pagination active={currentPage} onPageChange={handlePageChange} completedClassName="barCompleted" />
        </div>
      </div>
      {modalData && <BitcoinModal modalData={modalData} />}
    </>
  );
};

export default BitcoinList;
