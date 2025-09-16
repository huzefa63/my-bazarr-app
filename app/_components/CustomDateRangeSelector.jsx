'use client';
import { useEffect, useRef } from "react";
import { DateRangePicker } from "react-date-range";
import { createPortal } from "react-dom";

function CustomDateRangeSelector({setDateRange,dateRange,setShow}) {
    const ref = useRef(null);
    useEffect(()=>{
        function handleClick(e){
            if(ref.current && !ref.current.contains(e.target)) setShow(false)
        }
        document.addEventListener('click',handleClick);
    },[])
    return createPortal(
      <div ref={ref} >
        <DateRangePicker
          className="absolute lg:w-fit z-50 right-10 top-55 border border-gray-300 rounded-md overflow-hidden"
          onChange={(item) => setDateRange([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          
        />
      </div>,document.getElementById('root')
    );
}

export default CustomDateRangeSelector
