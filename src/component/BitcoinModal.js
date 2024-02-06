import IconBtn from "./IconBtn"
import { MdOutlineCancel } from "react-icons/md";
import { TiArrowSortedDown ,TiArrowSortedUp  } from "react-icons/ti";
import ProgressBar from '@ramonak/react-progress-bar';

export default function BitcoinModal({ modalData }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[550px] rounded-lg border border-richblack-400 bg-white p-6">
        <p className="text-xl font-semibold justify-between flex  text-richblack-900 border-b py-2">
          <div className="flex items-center"><img className='w-[24px] h-[24px] mr-2' src={modalData?.image} alt={modalData?.heading} />{modalData?.heading} </div> <MdOutlineCancel className="cursor-pointer" onClick={modalData?.btn2Handler} />
        </p>
       <div className="py-6">
       <thead className='bg-gray-200'>
          <tr className='py-4'>
            <th className='py-2 px-4 '>Price</th>
            <th className='py-2 px-4 '>24H</th>
            <th className='py-2 px-4 '>7D</th>
          </tr>
        </thead>
        <tbody>
        <tr className='font-inter font-semibold'>
        <td className='py-2 px-4 border-b border-richblack-200  text-center'>${modalData.current_price}</td>
              <td className='py-2 px-4 border-b border-richblack-200 text-center text-[#FF0000]'><div className='flex gap-1 items-center'>{<TiArrowSortedDown />}{"0.65%"}</div></td>
              <td className='py-2 px-4 border-b border-richblack-200  text-center text-[#008000]'><div className='flex gap-1 items-center'>{<TiArrowSortedUp />}{"0.65%"}</div></td>
          </tr>   
        </tbody>
        <div className="flex flex-col font-inter font-semibold mt-6 py-2 px-4 border-b border-richblack-200 ">
        <p className="text-sm">MARKET CAP</p>
        <p>${modalData?.market_place}</p>
       </div>
       <div className="flex flex-col font-inter font-semibold mt-6 py-2 px-4 border-b border-richblack-200 ">
        <p className="text-sm">Volume (24H)</p>
        <p>${modalData?.total_volume}</p>
       </div>
       <div className="flex flex-col font-inter font-semibold mt-6 py-2 px-4 border-b border-richblack-200 ">
        <p className="text-sm">CIRCULATING SUPPLY</p>
        <p>${modalData?.market_place} <div className='flex w-[200px] flex-col gap-4'><ProgressBar completed={60} height="8px"
          variant="success" isLabelVisible={false} /></div></p>
       </div>
       </div>

       
        
      </div>
    </div>
  )
}